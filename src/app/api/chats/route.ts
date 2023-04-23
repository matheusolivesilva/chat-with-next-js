import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  console.log(body);

  const chatCreated = await prisma.chat.create({
    data: {
      message: body.message,
    },
  });

  return NextResponse.json(chatCreated);
};

export const GET = async (request: NextRequest) => {
  const chats = await prisma.chat.findMany();

  return NextResponse.json(chats);
};
