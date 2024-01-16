import Link from "next/link";
// import styles from "@components/menu.module.css";
import Image from "next/image";

type Props = {};

export default function Trending() {
  return (
    <section className="lg:p-6 lg:pb-5 bg-gray-950 hidden md:block border border-gray-800 rounded-2xl">
      <h1 className="font-bold text-xl bg-gradient-to-br from-green-500 to-blue-600 bg-clip-text text-transparent mb-2">
        Trending Articles
      </h1>
      <div className="grid grid-cols-1 divide-y divide-gray-800">
        <Link href={""} className="max-w-full py-5">
          <div className="">
            <span className="text-sm py-1 px-2 rounded-2xl text-white w-max bg-yellow-600">
              Javascript
            </span>
            <h3 className="text-left  mt-3 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem,
            </h3>
            <div className="text-sm text-slate-400">
              <span className="">John Doe</span>
              <span className=""> - 05.10.2023</span>
            </div>
          </div>
        </Link>
        <Link href={""} className="max-w-full py-5">
          <div className="">
            <span className="text-sm py-1 px-2 rounded-2xl text-white w-max bg-cyan-600">
              Go
            </span>
            <h3 className="text-left  mt-3 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem,
            </h3>
            <div className="text-sm text-slate-400">
              <span className="">John Doe</span>
              <span className=""> - 05.10.2023</span>
            </div>
          </div>
        </Link>
        <Link href={""} className="max-w-full py-5">
          <div className="">
            <span className="text-sm py-1 px-2 rounded-2xl text-white w-max bg-green-600">
              Nodejs
            </span>
            <h3 className="text-left mt-3 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem,
            </h3>
            <div className="text-sm text-slate-400">
              <span className="">John Doe</span>
              <span className=""> - 05.10.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
