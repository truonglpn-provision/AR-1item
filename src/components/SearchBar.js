import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchTerm);

    }, 300);
    
    return () => clearTimeout(handler);
    
  }, [searchTerm, onSearch]);

  const handleClear = () => {
    setSearchTerm("");
    onSearch("")
  };

  return (
    <div className="relative mb-5 flex w-full items-center rounded-lg bg-gray-800 ">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full py-2 px-4 text-white bg-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg placeholder-red-600"
        placeholder="Tìm kiếm..."
      />
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
        >
             <FaTimes className="text-xl"/>
        </button>
      )}
    </div>
  );
};

export default React.memo(SearchBar);
