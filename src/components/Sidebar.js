import React, { useRef, useEffect } from "react";
import { FaList, FaBuilding, FaCouch, FaUtensils, FaCalendarCheck, FaCameraRetro } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Sidebar = ({ isOpen, onClose, menuItems, onCategorySelect, onSearch }) => {
  const sideBarRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && sideBarRef.current && !sideBarRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    onCategorySelect(category);
    onClose();
  };

  const getIcon = (icon) => {
    const icons = {
      "fas fa-list": <FaList />,
      "fas fa-building": <FaBuilding />,
      "fas fa-couch": <FaCouch />,
      "fas fa-utensils": <FaUtensils />,
      "fas fa-calendar-check": <FaCalendarCheck />,
      "fas fa-camera-retro": <FaCameraRetro />,
    };
    return icons[icon] || <FaList />;
  };

  return (
    <div
      ref={sideBarRef}
      className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="p-5">
        <SearchBar onSearch={onSearch}/>

        {menuItems.map((item, index) => (
          <li key={index} className="mb-3 flex items-center space-x-2">
            <a
              href="#"
              onClick={(e) => handleCategoryClick(e, item.category)}
              className="w-full hover:bg-gray-700 p-2 rounded flex items-center"
            >
              {getIcon(item.icon)}
              <span className="ml-3">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Sidebar);
