import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth();
    const user = session?.user;

    const dbUser = await prisma.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    return NextResponse.json(dbUser);
  } catch {
    const errorMessage = "Error fetching user profile";

    console.error(errorMessage);

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
