import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search ingredients..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className=" w-full p-4 rounded-3xl border border-pink-200 shadow-lg focus:ring-4 focus:ring-pink-200 outline-none transition
mb-8 "/>
  );
};

export default SearchBar;
