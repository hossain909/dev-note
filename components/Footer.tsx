import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="pt-5 md:pt-8 lg:p-6 lg:pb-5 bg-slate-950 hidden md:block border border-gray-800 rounded-2xl">
      <p className="font-bold text-lg mb-5 bg-gradient-to-br from-green-500 to-blue-600 text-transparent bg-clip-text ">
        Company
      </p>
      <div className="text-sm flex gap-5">
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Help</Link>
      </div>
      <div className="text-sm flex gap-5 my-2">
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of use</Link>
      </div>
      {/* <!--Copyright section--> */}
      <div className="flex items-center font- text-gray-400 text-sm gap-5">
        <div className="h-4 flex justify-center items-center">
          <p className="">Copyright2023</p>
          <a className="ml-2" href="#">
            {" "}
            DEV.
          </a>
        </div>
      </div>
    </div>
  );
}
