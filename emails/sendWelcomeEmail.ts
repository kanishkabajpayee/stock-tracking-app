import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

interface User
{
    name: string;
    email: string;

}


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export async function sendWelcomeEmail({email,name}:User) {
    console.log("🚀 Starting to send email to:",email);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODE_EMAIL,
      pass: process.env.NODE_PASS,
    },
  });

  const templatePath = path.join(process.cwd(), "emails", "templates", "welcome.ejs");
  const html = await ejs.renderFile(templatePath, { name,email, baseUrl });
  const mailOptions = {
        from: `"Signalist" `,
        to: email,
        subject: `Welcome to Signalist - your stock market toolkit is ready!`,
        text: 'Thanks for joining Signalist',
        html: html,
    }

    await transporter.sendMail(mailOptions);
   
}
