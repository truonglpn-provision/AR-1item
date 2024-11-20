import React from "react";
import MenuItem from "./MenuItem";

const MenuSection = ({ title, items, onModelSelect }) => {
  return (
    <div className="menu-section mb-8">
      <p className="menu-subtitle text-lg font-bold mb-4">{title}</p>
      <div
        className="menu grid grid-cols-2 gap-6"
        style={{ justifyItems: "center" }}
      >
        {items.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            price={item.price}
            imageSrc={item.imageSrc}
            modelSrc={item.modelSrc}
            iosSrc={item.iosSrc}
            onClick={onModelSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
