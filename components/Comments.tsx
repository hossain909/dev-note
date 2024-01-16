"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import userImg from "/public/user.png";
import useSWR from "swr";
import { useState } from "react";

// type Props = {};
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};
export default function Comments({ postSlug }) {
  const { status } = useSession();
  const [desc, setDesc] = useState("");

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleCommentSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };
  // console.log(data);
  return (
    <div className="mt-12">
      <h1 className="mb-5 font-bold font-mono text-2xl">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex flex-col">
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            name=""
            id=""
            cols={40}
            rows={4}
            placeholder="Write your comment..."
            className="bg-gray-950 border border-slate-800 rounded-2xl text-base p-5 placeholder:text-sm"
          />
          <div className="flex mt-5 gap-5">
            <button
              className="btn font-semibold py-2"
              onClick={() => setDesc("")}
            >
              Cancel
            </button>
            <button
              className="btn grad_green font-semibold py-2"
              onClick={handleCommentSubmit}
            >
              Comment
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Link
            href="/login"
            className="bg-gradient-to-br from-green-500 to-blue-600 text-transparent bg-clip-text"
          >
            Please login to write commment...
          </Link>
        </div>
      )}
      {isLoading
        ? "Loading...."
        : data?.map((item) => {
            return (
              <div className="flex flex-col mt-12 gap-5" key={item.id}>
                <div className="flex gap-3">
                  <div className="w-11">
                    <Image
                      width={48}
                      height={48}
                      src={item?.user?.image}
                      alt="user-image"
                      className="w-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="">{item.user.name}</h2>
                    <p className="text-gray-400 text-sm">
                      <span className="text-xs">
                        {new Date(item.createdAt).toDateString()}
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
    </div>
  );
}
