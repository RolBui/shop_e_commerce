import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

interface Props {
  handleSearch: () => void;
  showSearchForm: boolean;
}

const SearchButton = ({ handleSearch, showSearchForm }: Props) => {
  return (
    <button
      onClick={handleSearch}
      className="size-[30px] rounded-full bg-black flex justify-center items-center cursor-pointer text-white"
    >
      {showSearchForm ? (
        <FaTimes className="size-4" />
      ) : (
        <FaSearch className="size-4" />
      )}
    </button>
  );
};

export default SearchButton;
