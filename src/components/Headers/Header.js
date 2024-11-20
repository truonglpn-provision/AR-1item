import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center text-center w-full max-w-screen-lg mb-8 py-2 mx-auto">
      <a href="https://pro-vision.vn/">
        <img
          src={`/assets/img/general/provision-logo.png`}
          className="h-20 w-auto"
          alt="ProVisionVN Logo"
        />
      </a>
    </div>
  );
};

export default React.memo(Header);
