import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface SendContactMailParams {
  name: string;
  email: string;
  message: string;
  source: string;
}

export async function sendContactEmail({ name, email, message, source }: SendContactMailParams) {
  const fromEmail = process.env.FROM_EMAIL || 'noreply@wishlistflow.com';
  const toEmail = 'waqas@sqspstarter.com';

  const mailOptions = {
    from: `"GreenGo Contact Form" <${fromEmail}>`,
    to: toEmail,
    replyTo: email,
    subject: `New Contact Message from [${source}]`,
    text: `You have received a new contact message.

Name: ${name}
Email: ${email}
Source: ${source}

Message:
${message}
`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #4f46e5; margin-top: 0;">New Contact Message</h2>
        <p style="margin-bottom: 20px; color: #475569;">Received a new contact form submission via <strong>${source}</strong>.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #334155; width: 100px;">Name:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #334155;">Email:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #475569;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #334155;">Source:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #475569;">${source}</td>
          </tr>
        </table>

        <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #4f46e5; margin-top: 10px;">
          <p style="margin: 0; font-weight: bold; color: #334155; margin-bottom: 8px;">Message:</p>
          <p style="margin: 0; color: #475569; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('[Mail] Contact message forwarded successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('[Mail Error] Failed to send contact email:', error);
    return { success: false, error };
  }
}
