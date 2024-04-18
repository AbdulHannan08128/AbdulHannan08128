
import nodemailer from 'nodemailer';
import { resolve } from 'path';

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
    await new Promise(async(resolve, reject)=>{
      try {
        const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully. Message ID:', info.messageId);
      return info;
      } catch (error) {
        throw new Error(error);
        return false;
      }
      
      
    })
    
  } catch (error) {
    // console.error('Error sending email:', error);
    return false;
  }
};

export default MailConfig;