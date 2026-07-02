import { NextResponse } from "next/server";
import { db } from "@/db";
import { contacts } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    
    await db.insert(contacts).values({
      name,
      email,
      subject,
      message
    });

    // Here you would typically integrate with an email provider like SendGrid, AWS SES, or Nodemailer
    // console.log(`Email notification sent to admin for contact form from ${email}`);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
