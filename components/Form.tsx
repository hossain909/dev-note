import Link from "next/link";
import React from "react";

export default function Form({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) {
  return (
    <section className="w-full max-w-full flex-col">
      <h1 className="text-3xl text-left">
        <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          {type} Post
        </span>
      </h1>
      <p className="text-neutral-400 text-left mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        laudantium!
      </p>

      <form onSubmit={handleSubmit} className="mt-10">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="flex items-center">
            <label className="cursor-pointer flex flex-col gap-4">
              <span className="text-base">Add a cover image</span>
              <input
                onChange={(e) => console.log(e.target.files[0])}
                type="file"
                accept="image/*"
                data-max-file-size-mb="25"
              />
            </label>
          </div>
          <div className="sm:col-span-2">
            <input
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className="custom_input text-2xl"
              placeholder="New post title here..."
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              value={post.desc}
              onChange={(e) => setPost({ ...post, desc: e.target.value })}
              rows={8}
              className="custom_input text-lg"
              placeholder="Write your post content here..."
              required
            ></textarea>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tag {` `} <span>(#webdev, #react, #go)</span>
            </label>
            <input
              value={post.tag}
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
              className="custom_input"
              placeholder="Add up to 4 tags..."
              required
            />
          </div>
        </div>
        <div className="flex justify-end mb-5 gap-4 mt-10">
          <Link href="/" className="btn">
            Cancel
          </Link>
          <button type="submit" className="btn grad_green">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}
