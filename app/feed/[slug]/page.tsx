import Image from "next/image";
import desk from "@public/desk.webp";
import userImg from "@public/user.png";
import Comments from "@components/Comments";
import Menu from "@components/Menu";
import { BiLike } from "react-icons/bi";
import { FiBookmark, FiShare2 } from "react-icons/fi";
import { FiShare } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FaShare, FaShareNodes, FaSlideshare } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

async function getData(slug) {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get posts!");
  }

  return res.json();
}

export default async function Post({ params }) {
  const { slug } = params;
  const post = await getData(slug);
  // console.log("from server page: ", post);

  return (
    <>
      <section className="grid md:grid-cols-12 gap-10 mt-10 md:mt-20 lg:px-20 ">
        <div className="md:col-span-8 border border-gray-800 p-10 rounded-2xl bg-gray-950  ">
          <article>
            <header className="flex items-center gap-3">
              {post?.user?.image && (
                <div className="w-11">
                  <Image
                    src={post?.user.image}
                    alt="user-image"
                    width={40}
                    height={40}
                    className="w-full rounded-full"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <h2 className="text-sm">
                  {post?.user.name} {` `}
                  <span className="bg-gradient-to-br from-green-500 to-blue-600 text-transparent bg-clip-text text-sm font-bold ml-4">
                    Follow
                  </span>
                </h2>
                <div className="flex flex-col md:flex-row md:items-center">
                  <p className="text-gray-400 text-sm">
                    hossain.th00@gmail.com {"👉 "}
                  </p>
                  <p className="text-gray-400 text-sm leading-6">
                    {new Date(post.createdAt).toDateString()}
                  </p>
                </div>
              </div>
            </header>
            <div className="flex justify-between my-10 py-4  border border-gray-950 border-y-gray-800">
              <div className="flex gap-10">
                <div className="flex flex-row items-center gap-2">
                  <BiLike size={20} />
                  <span>100</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <FiMessageSquare size={20} />
                  <span>{post?.comments?.length}</span>
                </div>
              </div>
              <div className="flex gap-10">
                <FiBookmark size={20} />
                <FiShare size={20} />
              </div>
            </div>
            <h1 className="mb-5 font-mono font-semibold text-2xl md:text-5xl">
              {post.title}
            </h1>

            {post?.img && (
              <div className="md:my-5">
                <Image
                  width={100}
                  height={100}
                  src={post?.img}
                  alt="post-img"
                  className="object-contain w-full rounded"
                />
              </div>
            )}
            <div className="font-mono">
              <div dangerouslySetInnerHTML={{ __html: post?.desc }} />
            </div>
          </article>
          <Comments postSlug={slug} />
        </div>
        <div className="md:col-span-4">
          <Menu trend={true} />
        </div>
      </section>
    </>
  );
}
