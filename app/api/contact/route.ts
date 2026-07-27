import { NextRequest, NextResponse } from "next/server";

const EMAIL_TO = process.env.CONTACT_EMAIL || "info@goldlight.co.in";
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.warn(
    "SMTP configuration is missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in environment variables."
  );
}

export async function POST(request: NextRequest) {
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
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
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
        from: `${name} <${email}>`,
        to: EMAIL_TO,
        subject: "New website enquiry from GoldLighT Technologies",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`,
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
