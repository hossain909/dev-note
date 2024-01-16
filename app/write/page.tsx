"use client";
import { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa6";
import { FaFileVideo } from "react-icons/fa6";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { modules } from "@utils/quill";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { app } from "@utils/firebase";

export default function WriteNewPost() {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [categorySlug, setCategorySlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;
            // ...
            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);
  /** Upload image to firestore end */

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: content,
        img: media,
        slug: slugify(title),
        categorySlug: categorySlug || "tech", //If not selected, choose the general category
      }),
    });
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };
  return (
    <section className="md:px-20 md:mt-20 flex flex-col">
      <div>
        <input
          type="text"
          name=""
          placeholder="New post title here..."
          className="w-full bg-gray-900 placeholder-gray-600  text-5xl px-5 pb-5 focus:outline-none"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name=""
          placeholder="Add a category..."
          className="w-full bg-gray-900 placeholder-gray-600 px-5 pb-5 focus:outline-none"
          onChange={(e) => setCategorySlug(e.target.value)}
        />
        <div className="flex">
          <div className="flex gap-10 p-5">
            <button onClick={() => setOpen(!open)}>
              <FaCirclePlus size={20} color="#555555" />
            </button>
            {open && (
              <div className="flex gap-6 transition-transform">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <button>
                  <label htmlFor="image" className="cursor-pointer">
                    <FaImage size={18} />
                  </label>
                </button>
                <button>
                  <FaUpload size={18} />
                </button>
                <button>
                  <FaFileVideo size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          placeholder="Write your post content here..."
          className="w-full p-3 h-96 md:h-screen placeholder-gray-600"
        />

        <div className="flex justify-end gap-5 p-5 mt-10">
          <button className="btn font-semibold py-2 px-6">Cancel</button>
          <button
            className="btn grad_purple font-semibold py-2 px-6"
            onClick={handleSubmit}
          >
            Publish
          </button>
        </div>
      </div>
    </section>
  );
}
