import { NextRequest, NextResponse } from "next/server";

const EMAIL_TO = process.env.CONTACT_EMAIL || "info@goldlight.co.in";
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_FROM = process.env.EMAIL_FROM || SMTP_USER || EMAIL_TO;

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
  try {
    let body;

    try {
      body = await request.json();
    } catch (jsonError) {
      return NextResponse.json(
        { error: "Invalid request payload. Expected JSON." },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
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
      await transporter.sendMail({
        from: EMAIL_FROM,
        replyTo: `${name} <${email}>`,
        to: EMAIL_TO,
        subject: "New website enquiry from GoldLighT Technologies",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || "Not provided"}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br />")}</p>`,
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
