// // /app/api/contact/route.js
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const data = await req.json();
//     const { firstName, lastName, email, phone, subject, message } = data;

//     // Configure transporter — use your own SMTP provider (e.g., Gmail, SendGrid)
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST, // e.g., "smtp.gmail.com"
//       port: Number(process.env.SMTP_PORT) || 465,
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER, // your email
//         pass: process.env.SMTP_PASS, // your app password
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: process.env.CONTACT_RECEIVER || "info@thetranquils.com",
//       subject: `New Contact Form from Four096: ${subject}`,
//       html: `
//         <h2>New Contact Message</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     });

//     return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), { status: 200 });
// } catch (error) {
//   console.error("Email sending error:", error);
//   return new Response(
//     JSON.stringify({
//       error: "Failed to send email",
//       details: String(error),    
//       raw: JSON.stringify(error, Object.getOwnPropertyNames(error))
//     }),
//     { status: 500, headers: { "Content-Type": "application/json" } }
//   );
// }



// }


import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, phone } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // use true for port 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: "New Contact Form Submission - The Tranquil",
      html: `
        <h2>New Inquiry from The Tranquil Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
