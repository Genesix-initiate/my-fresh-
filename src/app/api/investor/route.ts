import { NextResponse } from "next/server";
import { db } from "@/db";
import { investorRequests } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const { name, email, amount, interest } = await req.json();
    
    await db.insert(investorRequests).values({
      name,
      email,
      amount,
      interest
    });

    // Email notification mock
    // console.log(`Email notification sent to admin for investor inquiry from ${email}`);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in investor API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
