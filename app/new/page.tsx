"use client";
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewPost() {
  const { data: session } = useSession();
  const router = useRouter();
  const [post, setPost] = useState({
    title: "",
    desc: "",
    tag: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const newPost = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          desc: post.desc,
          tag: post.tag,
          userId: session?.user.id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={newPost}
    />
  );
}
