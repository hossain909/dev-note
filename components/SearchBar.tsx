// type Props = {
//   searchText: String;
// };

export default function SearchBar() {
  return (
    <div className="max-w-full bg-gray-950 border border-gray-800 rounded-full">
      <form action="/search" className="w-full px-5">
        <div className="relative flex">
          <button type="submit" className="absolute left-0 top-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <input
            type="text"
            name="q"
            className="w-full h-10 shadow rounded-full px-10 bg-gray-950 focus:outline-none"
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
  );
}
