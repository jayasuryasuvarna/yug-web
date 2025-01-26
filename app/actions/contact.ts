'use server';

// app/actions/contact.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function submitContactForm(formData: FormData) {
  try {
    // Send email
    // await transporter.sendMail({
    //   from: process.env.SMTP_FROM,
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New Contact Form Submission - ${formData.get('queryType')}`,
    //   text: `
    //     Name: ${formData.get('name')}
    //     Email: ${formData.get('email')}
    //     Phone: ${formData.get('phone')}
    //     Query Type: ${formData.get('queryType')}
    //     Message: ${formData.get('message')}
    //   `,
    // });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}