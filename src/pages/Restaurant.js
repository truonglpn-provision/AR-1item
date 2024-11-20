import React, { useState } from "react";
import ARModelViewer from "../components/ARModelViewer/ARModelViewer";
import MenuSection from "../components/Menus/MenuSection";
import { drinkItems, foodItemDefault, foodItems } from "../constants";

const Restaurant = () => {
  const [currentModel, setCurrentModel] = useState({
    src: foodItemDefault,
    iosSrc: "",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleModelSelect = (modelSrc, iosSrc) => {
    setCurrentModel({ src: modelSrc, iosSrc: iosSrc });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="relative"
      style={{ "custom-gradient": "linear-gradient(#ffffff, #ada996)" }}
    >
      <ARModelViewer
        modelRef={React.createRef()}
        src={currentModel.src}
        iosSrc={currentModel.iosSrc}
        className={"h-screen items-center"}
      />

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-64"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="menu-wrapper p-4">
          <p className="menu-title text-center text-red-600 text-2xl font-bold">
            Menu
          </p>
          <MenuSection
            title="Món ăn"
            items={foodItems}
            onModelSelect={(modelSrc, iosSrc) =>
              handleModelSelect(modelSrc, iosSrc)
            }
          />
          <MenuSection
            title="Thức uống"
            items={drinkItems}
            onModelSelect={(modelSrc, iosSrc) =>
              handleModelSelect(modelSrc, iosSrc)
            }
          />
        </div>
      </div>

      <div
        className="menu-open-btn fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer animate-blink "
        onClick={toggleMenu}
        style={{
          zIndex: 1100,
          background: 'linear-gradient(#ffffff, #ada996)', 
        }}
      >
        <img
          src="/assets/img/restaurant/new_menu2.png"
          alt="menu"
          className="w-12 h-12"
        />
      </div>
    </div>
  );
};

export default Restaurant;
