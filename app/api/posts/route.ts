import { getAuthSession } from '@utils/auth';
import prisma from '@utils/connect';
import { NextResponse } from 'next/server';

// Get all posts
export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get('page');

  const POST_PER_PAGE = 2;
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    include: { user: true, comments: true },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);
    console.log(posts);
    return new NextResponse(JSON.stringify({ posts, count }));
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: 'No post found!' }), {
      status: 500,
    });
  }
}

// Create a post
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: 'Not Authenticated!' }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user?.email },
    });
    console.log(post);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: 'Failed to create new post!' }),
      { status: 500 },
    );
  }
};
