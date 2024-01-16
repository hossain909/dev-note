import prisma from "@utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Get single post
export async function GET(req: NextRequest, { params }) {
  const { slug } = params;
  // console.log(slug);
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true, comments: true },
    });
    // console.log("from api route: ", post);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "No post found!" }), {
      status: 500,
    });
  }
}
