"use client";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  console.log(hasPrev, hasNext);

  return (
    <div className="flex gap-5 my-10 justify-between">
      <button
        className={`${
          !hasPrev && "opacity-50 cursor-not-allowed"
        } border border-gray-800 btn grad_green font-medium }`}
        disabled={!hasPrev}
        onClick={() => router.push(`feed?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={`${
          !hasNext && "opacity-70 cursor-not-allowed"
        } border border-gray-800 btn grad_green font-medium }`}
        onClick={() => router.push(`feed?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
