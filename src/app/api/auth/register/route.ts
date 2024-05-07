import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();

    await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    console.log({ email, password });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: "success" });
};
