import { mailOption, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  const textTemplate = Object.entries(data).reduce((template, [key, value]) => {
    return template + `${key}: ${value}\n`;
  }, "");
  const htmlTemplate =
    `<div class="emailBody">\n` +
    Object.entries(data).reduce((template, [key, value]) => {
      return (
        template +
        `  <p><span style="font-weight: 600">${key}:</span> ${value}</p>\n`
      );
    }, "") +
    `</div>`;
  try {
    await transporter.sendMail({
      ...mailOption,
      subject: "Contact Form By Nishath",
      text: textTemplate,
      html: `<!doctype html>
      <html lang=en>
      <head>
      <meta charset=UTF-8>
      <meta name=viewport content="width=device-width,initial-scale=1">
      <title>Email</title>
      <style>*{margin:0;padding:0}h1{color:#2ff093;font-size:22px;font-weight:700;font-family:Verdana,Geneva,Tahoma,sans-serif;margin-bottom:20px}.main{display:flex;width:fit-content;max-width:700px;border:2px solid gray;padding:20px 30px;border-style:dotted;border-radius:8px;justify-content:center;margin:0 auto}.emailBody{gap:8px}p{color:#222;font-size:16px;font-weight:400;font-family:Verdana,Geneva,Tahoma,sans-serif;margin-top:5px}</style>
      </head>
      <body>
      <main class=main>
      <div>
      <div class=emailBody>
      ${htmlTemplate}
      </div>
      </div>
      </main>
      </body>
      </html>`,
      // name: data.name,
      // email: data.email,
      // phone: data.phone,
      // meaasge: data.message,
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ message: "Bad Request" }, { status: 500 });
}
