import Link from "next/link";
// import { usePathname } from "next/navigation";
import React from "react";

export default function FeedNavLinks() {
  return (
    <nav className="col-span-full lg:col-span-8 bg-gray-950 rounded-2xl p-5 border border-gray-800">
      <div className="flex justify-start gap-10 font-bold">
        <Link href="/feed">My Feed</Link>
        <Link href="/Top">Latest</Link>
        <Link href="/latest">Top</Link>
      </div>
    </nav>
  );
}
