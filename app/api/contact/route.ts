// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, message } = await req.json();
  console.log("Contact message received:", { email, message });
  return NextResponse.json({ ok: true });
}