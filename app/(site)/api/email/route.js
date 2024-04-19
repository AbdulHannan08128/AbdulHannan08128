import { sendEmail } from "../../../../functions/sendEmail";

export async function GET() {
  return Response.json({});
}
export async function POST(req) {
  const data = await req.json();
  try {
    await sendEmail(
      {
        to: "mohammadayaan08128@gmail.com",
        subject: data.subject,
        text: "",
        html: `<div>
        <p style="font-weight: bold;">Name: ${data.name}</p>
        <p style="font-weight: bold;">Email: ${data.email}</p>
        <p style="font-weight: bold;">Phone: ${data.number}</p>
        <hr/>
        <p style="font-weight: bold;">Message:</p>
        <p>${data.message}</p>
    </div>
    `,
      },
      (info) => {
        console.log(info.messageId);
      },
    );
  
    await sendEmail(
      {
        to: data.email,
        subject:
          "Thanks for Contacting Me. I'll Reply To Your Message Fast On Your Email.",
        text: ``,
        html: `<h3>Your Contact Form Submission Was Successful</h3>
        <p style="font-size: 1.7rem;">I'll Be Back Soon. Until I Reply You: Read Some Of My Latest BlogPosts By Clicking The Button Below:</p>
        <hr/>
        <div style="width: 100%; text-align: center;">
            <a href="https://abdul-hannan.vercel.app/blog" style="padding: 20px; background: green; color: white; font-weight: bold; border: 2px solid black; text-decoration: none;">My Latest Blogs</a>
        </div>
        `,
      },
      (info) => {
        console.log(info.messageId);
      },
      
    );
    return Response.json({ status: 200 });
  } catch (error) {
    throw new Error('ERR: Email Not Sent:\n'+error)
  }
  
  
}
