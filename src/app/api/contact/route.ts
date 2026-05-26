import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Create transporter using Gmail App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,      // your gmail
        pass: process.env.GMAIL_APP_PASS,  // 16-char App Password
      },
    });

    // ── Email to YOU (Tech Inspira) ──
    await transporter.sendMail({
      from: `"Tech Inspira Website" <${process.env.GMAIL_USER}>`,
      to: "inspira.innovations00@gmail.com",
      replyTo: email,
      subject: `🚀 New Inquiry — ${service} | from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#020617; color:#f8fafc; padding:32px; border-radius:12px; max-width:600px;">
          <div style="background:linear-gradient(135deg,#00a8ff,#00d2ff); padding:2px; border-radius:12px; margin-bottom:24px;">
            <div style="background:#020617; border-radius:11px; padding:24px;">
              <h1 style="margin:0 0 4px; font-size:22px; color:#00d2ff;">New Client Inquiry</h1>
              <p style="margin:0; font-size:12px; color:#64748b; text-transform:uppercase; letter-spacing:2px;">Tech Inspira Innovation</p>
            </div>
          </div>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #1e3a5f; width:35%;">
                <span style="font-size:11px; color:#64748b; text-transform:uppercase; letter-spacing:1px; font-weight:bold;">Name</span>
              </td>
              <td style="padding:10px 0; border-bottom:1px solid #1e3a5f;">
                <span style="font-size:14px; color:#f8fafc; font-weight:bold;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #1e3a5f;">
                <span style="font-size:11px; color:#64748b; text-transform:uppercase; letter-spacing:1px; font-weight:bold;">Email</span>
              </td>
              <td style="padding:10px 0; border-bottom:1px solid #1e3a5f;">
                <a href="mailto:${email}" style="font-size:14px; color:#00d2ff; text-decoration:none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #1e3a5f;">
                <span style="font-size:11px; color:#64748b; text-transform:uppercase; letter-spacing:1px; font-weight:bold;">Service</span>
              </td>
              <td style="padding:10px 0; border-bottom:1px solid #1e3a5f;">
                <span style="background:#00a8ff22; border:1px solid #00a8ff55; border-radius:6px; padding:3px 10px; font-size:12px; color:#00d2ff; font-weight:bold;">${service}</span>
              </td>
            </tr>
          </table>

          <div style="margin-top:20px;">
            <p style="font-size:11px; color:#64748b; text-transform:uppercase; letter-spacing:1px; font-weight:bold; margin-bottom:8px;">Project Details</p>
            <div style="background:#0a1628; border:1px solid #1e3a5f; border-radius:8px; padding:16px;">
              <p style="margin:0; font-size:14px; color:#cbd5e1; line-height:1.7; white-space:pre-wrap;">${message}</p>
            </div>
          </div>

          <p style="margin-top:24px; font-size:11px; color:#475569; text-align:center;">
            Reply directly to this email to respond to ${name} · Tech Inspira Innovation
          </p>
        </div>
      `,
    });

    // ── Auto-reply to CLIENT ──
    await transporter.sendMail({
      from: `"Tech Inspira Innovation" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! — Tech Inspira Innovation`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#020617; color:#f8fafc; padding:32px; border-radius:12px; max-width:600px;">
          <div style="background:linear-gradient(135deg,#00a8ff,#00d2ff); padding:2px; border-radius:12px; margin-bottom:24px;">
            <div style="background:#020617; border-radius:11px; padding:24px; text-align:center;">
              <h1 style="margin:0 0 4px; font-size:24px; color:#ffffff;">Tech Inspira Innovation</h1>
              <p style="margin:0; font-size:12px; color:#00d2ff; text-transform:uppercase; letter-spacing:2px;">We've received your inquiry!</p>
            </div>
          </div>

          <p style="font-size:16px; color:#f8fafc;">Hi <strong>${name}</strong>,</p>
          <p style="font-size:14px; color:#94a3b8; line-height:1.7;">
            Thank you for getting in touch! We've received your inquiry regarding <strong style="color:#00d2ff;">${service}</strong> and our team will review it shortly.
          </p>
          <p style="font-size:14px; color:#94a3b8; line-height:1.7;">
            We typically respond within <strong style="color:#ffffff;">24 hours</strong>. In the meantime, feel free to explore our portfolio or reach out directly:
          </p>

          <div style="display:flex; gap:12px; margin:24px 0; flex-wrap:wrap;">
            <a href="mailto:inspira.innovations00@gmail.com" style="background:#00a8ff22; border:1px solid #00a8ff55; border-radius:8px; padding:10px 16px; font-size:12px; color:#00d2ff; text-decoration:none; font-weight:bold;">✉ inspira.innovations00@gmail.com</a>
            <a href="tel:8767302763" style="background:#10b98122; border:1px solid #10b98155; border-radius:8px; padding:10px 16px; font-size:12px; color:#34d399; text-decoration:none; font-weight:bold;">📞 8767302763</a>
          </div>

          <p style="margin-top:24px; font-size:12px; color:#475569; text-align:center; border-top:1px solid #1e3a5f; padding-top:16px;">
            © ${new Date().getFullYear()} Tech Inspira Innovation · Innovate · Design · Develop · Grow
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
