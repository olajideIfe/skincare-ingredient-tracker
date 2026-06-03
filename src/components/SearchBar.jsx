import React from 'react'

const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <input
      type="text"
      placeholder="Search ingredients..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="
      w-full
      p-4
      rounded-2xl
      border
      mb-8
      "
    />
  );
};

export default SearchBar;