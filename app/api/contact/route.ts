import { NextRequest, NextResponse } from "next/server";

const EMAIL_TO = process.env.CONTACT_EMAIL || "info@goldlight.co.in";
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_FROM = process.env.EMAIL_FROM || SMTP_USER || EMAIL_TO;
const MAX_ATTACHMENT_SIZE = 10 * 1024 * 1024;
const MAX_REQUEST_SIZE = MAX_ATTACHMENT_SIZE + 1024 * 1024;
const ALLOWED_ATTACHMENT_EXTENSIONS = new Set([
  "pdf",
  "doc",
  "docx",
  "txt",
  "rtf",
  "odt",
]);

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

const missingSmtpConfig = !SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_FROM;
if (missingSmtpConfig) {
  console.warn(
    "SMTP configuration is missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and optionally EMAIL_FROM in environment variables."
  );
}

export async function POST(request: NextRequest) {
  if (missingSmtpConfig) {
    return NextResponse.json(
      { error: "Email is not configured on the server. Please check SMTP environment variables." },
      { status: 500 }
    );
  }
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_SIZE) {
    return NextResponse.json(
      { error: "The document must be 10 MB or smaller." },
      { status: 413 }
    );
  }

  try {
    let name: unknown;
    let email: unknown;
    let phone: unknown;
    let message: unknown;
    let attachmentValue: unknown = null;

    if (
      request.headers
        .get("content-type")
        ?.includes("multipart/form-data")
    ) {
      let formData: FormData;
      try {
        formData = await request.formData();
      } catch {
        return NextResponse.json(
          { error: "Invalid form submission." },
          { status: 400 }
        );
      }
      name = formData.get("name");
      email = formData.get("email");
      phone = formData.get("phone");
      message = formData.get("message");
      attachmentValue = formData.get("attachment");
    } else {
      let body: unknown;
      try {
        body = await request.json();
      } catch {
        return NextResponse.json(
          { error: "Invalid request payload. Expected JSON or form data." },
          { status: 400 }
        );
      }
      if (!body || typeof body !== "object") {
        return NextResponse.json(
          { error: "Invalid request payload." },
          { status: 400 }
        );
      }
      const payload = body as Record<string, unknown>;
      name = payload.name;
      email = payload.email;
      phone = payload.phone;
      message = payload.message;
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      (phone !== null && phone !== undefined && typeof phone !== "string") ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    let attachment: { file: File; filename: string } | null = null;
    if (attachmentValue !== null) {
      if (!(attachmentValue instanceof File)) {
        return NextResponse.json(
          { error: "Invalid document upload." },
          { status: 400 }
        );
      }
      if (attachmentValue.size > MAX_ATTACHMENT_SIZE) {
        return NextResponse.json(
          { error: "The document must be 10 MB or smaller." },
          { status: 400 }
        );
      }
      if (attachmentValue.size > 0) {
        const filename =
          attachmentValue.name.split(/[\\/]/).pop()?.trim() || "";
        const extension = filename.split(".").pop()?.toLowerCase();
        if (!filename || !extension || !ALLOWED_ATTACHMENT_EXTENSIONS.has(extension)) {
          return NextResponse.json(
            { error: "Upload a PDF, Word, OpenDocument, or text document." },
            { status: 400 }
          );
        }
        attachment = {
          file: attachmentValue,
          filename: filename.replace(/[\r\n"]/g, "_"),
        };
      }
    }

    let nodemailer;
    try {
      // dynamic import to avoid import-time failures in some deployment environments
      // (Vercel or static builds can sometimes surface bundling/import issues)
      nodemailer = await import("nodemailer");
    } catch (impErr) {
      console.error("Failed to import nodemailer:", impErr);
      return NextResponse.json(
        { error: "Server misconfiguration: email support unavailable." },
        { status: 500 }
      );
    }

    let transporter;
    try {
      transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});
    } catch (transErr) {
      console.error("Failed to create transporter:", transErr);
      return NextResponse.json(
        { error: "Email transporter initialization failed." },
        { status: 500 }
      );
    }

    try {
      const emailName = name.trim();
      const emailAddress = email.trim();
      const emailPhone = typeof phone === "string" ? phone.trim() : "";
      const emailMessage = message.trim();
      const htmlName = escapeHtml(emailName);
      const htmlEmail = escapeHtml(emailAddress);
      const htmlPhone = escapeHtml(emailPhone || "Not provided");
      const htmlMessage = escapeHtml(emailMessage).replace(/\n/g, "<br />");

      await transporter.sendMail({
        from: EMAIL_FROM,
        replyTo: `${emailName} <${emailAddress}>`,
        to: EMAIL_TO,
        subject: "New website enquiry from GoldLighT Technologies",
        text: `Name: ${emailName}\nEmail: ${emailAddress}\nPhone: ${emailPhone || "Not provided"}\n\nMessage:\n${emailMessage}`,
        html: `<p><strong>Name:</strong> ${htmlName}</p><p><strong>Email:</strong> ${htmlEmail}</p><p><strong>Phone:</strong> ${htmlPhone}</p><p><strong>Message:</strong></p><p>${htmlMessage}</p>`,
        ...(attachment
          ? {
              attachments: [
                {
                  filename: attachment.filename,
                  content: Buffer.from(await attachment.file.arrayBuffer()),
                },
              ],
            }
          : {}),
      });
    } catch (sendErr) {
      console.error("Failed to send email:", sendErr);
      return NextResponse.json(
        { error: "Could not send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unknown server error." },
      { status: 500 }
    );
  }
}
