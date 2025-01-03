// MailConfig.js
import nodemailer from 'nodemailer';

const MailConfig = async (emailOptions) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mohammadayaan08128@gmail.com',
      pass: 'hcdn hxrl fgxb uaon', // Use the generated App Password here
    },
  });

  const mailOptions = {
    from: 'mohammadayaan08128@gmail.com',
    to: emailOptions.to,
    subject: emailOptions.subject,
    text: emailOptions.text,
    html: emailOptions.html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully. Message ID:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Rethrow the error to be caught by the calling function
  }
};

export default MailConfig;
