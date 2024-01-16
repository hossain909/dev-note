import React from "react";

type Props = {};

export default function Related({}: Props) {
  return (
    <section className="pt-5 md:pt-6 lg:p-6 lg:pb-5 bg-slate-950 gap-4 md:gap-5 hidden md:block border border-gray-800 rounded-2xl">
      <h1 className="font-bold text-xl bg-gradient-to-br from-green-500 to-blue-600 bg-clip-text text-transparent mb-2">
        Related Articles
      </h1>
      <div className="grid grid-cols-1 divide-y divide-gray-800">
        <h1 className="text-base font-bold py-4">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </h1>
        <h1 className="text-base font-bold py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <h1 className="text-base font-bold py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum.
        </h1>
        <h1 className="text-base font-bold py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <h1 className="text-base font-bold py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
      </div>
    </section>
  );
}
