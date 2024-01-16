import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get categories!");
  }
  return res.json();
}
export default async function CategoryList() {
  const data = await getData();
  // console.log("catList: ", data);
  return (
    <div className="pt-5 md:pt-8 lg:p-6 lg:pb-5 bg-slate-950 gap-4 md:gap-5 hidden md:block border border-gray-800 rounded-2xl">
      <h2 className="font-bold text-xl bg-gradient-to-br from-green-500 to-blue-600 text-transparent bg-clip-text">
        Popular Tags
      </h2>
      <div className="flex flex-col text-left my-5 gap-4 h-96 overflow-y-scroll">
        {data?.map(({ slug, id }) => {
          return (
            <Link href={`/blog?category=${slug}`} key={id}>
              #{slug}
            </Link>
          );
        })}
        {/* {data.map((item, index) => {
          return (
            <Link href="#" key={index}>
              #{item}
            </Link>
          );
        })} */}
      </div>
    </div>
  );
}
