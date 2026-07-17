import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="max-w-5xl mx-auto p-6">
      <input
        type="text"
        placeholder="Search for food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-4 border rounded-lg"
      />
    </div>
  );
};

export default Search;