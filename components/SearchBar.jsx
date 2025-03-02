export default function SearchBar({searchTerm}) {
  return <>
    <div className="w-[60vw] mx-auto rounded-full border-1 border-gray-300 my-4 bg-white flex items-center px-4 py-2 focus:border-blue-200">
      <input
        onChange={(e) => searchTerm(e.target.value)}
        type="text"
        className="w-full outline-none"
        placeholder="Search..."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  </>;
}
