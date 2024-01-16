import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Trending from "./Trending2";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <section>
      <aside className="pt-5 md:pt-8 lg:p-6 lg:pb-5 bg-white dark:bg-slate-950 gap-4 md:gap-5 hidden md:block border border-gray-800 rounded-2xl">
        {/* <Trending /> */}
        {/** Main links  */}
        <nav className="flex flex-col text-left gap-3">
          <Link href="#">FAQS</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </nav>
        {/** Tag links  */}
        <p className="font-bold text-lg mt-6 mb-3 bg-gradient-to-br from-green-500 to-blue-600 text-transparent bg-clip-text">
          Popular Tags
        </p>
        <nav className="flex flex-col text-left gap-3">
          <Link href="#">#javascript</Link>
          <Link href="#">#react</Link>
          <Link href="#">#go</Link>
          <Link href="#">#python</Link>
          <Link href="#">#nextjs</Link>
        </nav>
      </aside>
      <aside className="pt-5 md:pt-8 lg:p-6 lg:pb-5 bg-white dark:bg-slate-950 gap-4 md:gap-5 hidden md:block rounded-2xl mt-5">
        <div>
          <p className="font-bold text-lg mb-3 bg-gradient-to-br from-green-500 to-blue-600 text-transparent bg-clip-text ">
            Company
          </p>
          <nav className="flex text-left gap-5">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of use</Link>
          </nav>
          <span className="inline-block text-sm break-words text-slate-500 dark:​text-slate-400 text-center">
            &copy; 2023 devNote
          </span>
        </div>
        ​
        <div className="">
          <p className="font-bold text-lg mb-3 bg-gradient-to-br from-green-500 to-blue-600 text-transparent bg-clip-text">
            Connect with us
          </p>
          <nav className="flex text-left gap-3">
            <Link href="#">
              <FaGithub />
            </Link>

            <Link href="#">
              <FaFacebook />
            </Link>

            <Link href="#">
              <FaInstagram />
            </Link>
          </nav>
        </div>
      </aside>
    </section>
  );
}
