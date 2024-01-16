// GET All comments of a post

import { getAuthSession } from "@utils/auth";
import prisma from "@utils/connect";
import { NextResponse } from "next/server";

// GET all comments
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: { ...(postSlug && { postSlug }) },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "No commment found!" }), {
      status: 500,
    });
  }
}

// Create a comment
export async function POST(req) {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }
  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session?.user?.email },
    });
    return new NextResponse(JSON.stringify(comment), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to create comment!!" }),
      {
        status: 401,
      }
    );
  }
}
