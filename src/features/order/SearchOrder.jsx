import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="ml-auto lg:ml-0">
      <input
        placeholder="Search order by ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-amber-200 px-4 py-1 text-sm font-medium text-stone-800 transition-all duration-300 placeholder:text-stone-700 focus:outline-none focus:ring focus:ring-amber-600 focus:ring-opacity-50 sm:w-44 sm:focus:w-52 lg:ml-[-3rem] lg:w-72 lg:focus:w-80"
      />
    </form>
  );
}

export default SearchOrder;
