// sendEmail.js
import MailConfig from '../utils/MailConfig';

export async function sendEmail(props) {
  const sendEmailFunction = async () => {
    const emailOptions = {
      to: props.to,
      subject: props.subject, 
      text: props.text,
      html: props.html,
    };

    try {
      const suc = await MailConfig(emailOptions);
      return { status: true, info: suc };
    } catch (err) {
      return { status: false, info: err };
    }
  };

  return sendEmailFunction(); // Return the result of sendEmailFunction
}
