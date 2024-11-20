import React from "react";

const MenuItem = ({ name, price, imageSrc, modelSrc, iosSrc, onClick }) => {
  return (
    <div
      className="menu-item flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      onClick={() => onClick(modelSrc, iosSrc)}
      style={{ cursor: "pointer", maxWidth: "180px" }}
    >
      <div className="menu-image-container">
        <img
          src={imageSrc}
          alt={name}
          style={{
            width: "100%",
            height: "120px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="menu-item-description mt-4 text-center">
        <p className="menu-item-name font-semibold text-gray-800">{name}</p>
        <p className="menu-item-price text-gray-600">{price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
