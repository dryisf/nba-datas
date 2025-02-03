import { getUserFromNextAuth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const authUser = await getUserFromNextAuth();

    return NextResponse.json(authUser);
  } catch {
    const errorMessage = "Error fetching auth user data";

    console.error(errorMessage);

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
