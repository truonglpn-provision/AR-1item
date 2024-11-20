import React from "react";
import { FaBars } from "react-icons/fa";

const Toggle = ({ onClick, isOpen }) => {
  return (
    <button
      id="toggle-btn"
      onClick={onClick}
      className={`fixed top-5 left-5 bg-gray-800 text-pink-600 border-none px-4 py-3 cursor-pointer rounded transition-all duration-300 ease-in-out hover:scale-110 z-[1000] ${
        isOpen ? "translate-x-64" : ""
      }`}
    >
        <FaBars className="text-2xl" /> 
    </button>
  );
};

export default React.memo(Toggle);
