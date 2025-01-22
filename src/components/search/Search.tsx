"use client";

import { Button, Input } from "antd";
import { useState } from "react";

const Search = ({
  handleSearch,
  loading,
}: {
  handleSearch: (searchText: string) => void;
  loading: boolean;
}) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(searchText); // Trigger search on Enter
    }
  };

  return (
    <div className="flex gap-2 w-full justify-center items-center">
      <div className="flex w-[70%] gap-2 p-2">
        <Input
          placeholder="Start typing to get CVEs"
          onChange={(e) => setSearchText(e.target.value)} // Update local state without affecting the URL
          onKeyDown={handleKeyDown} // Trigger search only when Enter is pressed
          value={searchText} // Controlled input
        />
        <Button onClick={() => handleSearch(searchText)} loading={loading}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
