import React from "react";

const useSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  setSearchTerm(e.target.value);
  return searchTerm;
};

export default useSearch;
