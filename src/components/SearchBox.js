import React from "react";

function SearchBox({ searchTerm, handleChange }) {
  return (
    <>
      <input
        placeholder="Qidiruv"
        type="text"
        value={searchTerm}
        onChange={handleChange}
      />
    </>
  );
}

export default SearchBox;
