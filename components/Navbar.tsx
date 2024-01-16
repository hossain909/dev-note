"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@public/pencil.png";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { HiPencilAlt } from "react-icons/hi";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchText, setSearchText] = useState("");
  // console.log(session, status);

  return (
    <nav className="flex justify-between items-center mb-5 mx-5 md:mx-0">
      <div className="md:flex gap-3">
        <div className="flex items-center">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src={logo}
              width={35}
              height={35}
              alt="logo"
              className="object-contain"
            />
            <p className="hidden md:block text-3xl">
              <span className="font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                DEV.
              </span>
            </p>
          </Link>
        </div>
        <div className="">
          <SearchBar />
        </div>
      </div>

      {/** Desktop Navigation */}
      <div className="sm:flex justify-end hidden">
        {status === "authenticated" ? (
          <div className="flex gap-3 items-center">
            <Link href="/write" className="flex gap-1 md:mr-5 ">
              <HiPencilAlt size={24} />
              Write
            </Link>
            <button
              type="button"
              onClick={() => signOut()}
              className="btn grad_green"
            >
              Sign Out
            </button>
            <div className="w-10">
              <Link href="/profile">
                <Image
                  src={`${session?.user?.image}`}
                  width={40}
                  height={40}
                  alt="user-image"
                  className="w-full rounded-full"
                />
              </Link>
            </div>
          </div>
        ) : (
          <Link href="/login">
            <button type="button" className="btn grad_green">
              Sign In
            </button>
          </Link>
        )}
      </div>

      {/** Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {status === "authenticated" ? (
          <div className="flex">
            <Image
              src={`${session?.user?.image}`}
              width={37}
              height={37}
              alt="user image"
              className="rounded-full"
              onClick={() => setToggleMenu((prev) => !prev)}
            />
            {toggleMenu && (
              <div className="dropdown text-right">
                <Link
                  href="/profile"
                  onClick={() => setToggleMenu(false)}
                  className="dropdown_link"
                >
                  My Profile
                </Link>
                <Link
                  href="/write"
                  onClick={() => setToggleMenu(false)}
                  className="dropdown_link"
                >
                  Write Post
                </Link>
                <button
                  type="button"
                  className="w-full mt-6 btn grad_green"
                  onClick={() => {
                    setToggleMenu(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <button type="button" className="btn grad_green">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
