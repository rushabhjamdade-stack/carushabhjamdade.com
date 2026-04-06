import { NextRequest, NextResponse } from "next/server";

// In-memory store for V1 — swap to Supabase later
const subscribers: { email: string; timestamp: string }[] = [];

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check for duplicates
    if (subscribers.some((s) => s.email === email)) {
      return NextResponse.json(
        { message: "Already subscribed" },
        { status: 200 }
      );
    }

    subscribers.push({ email, timestamp: new Date().toISOString() });
    console.log(`New subscriber: ${email} (total: ${subscribers.length})`);

    return NextResponse.json({ message: "Subscribed successfully" });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
