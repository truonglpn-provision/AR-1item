import React from 'react';

const Header = () => {
  return (
    <figure className="header flex justify-between items-center w-full px-8 py-4 bg-transparent">
      <a
        href="https://menasmall.com/kham-pha-thien-duong-vui-choi-sang-tao-tai-menaworld/"
        className="flex-shrink-0"
      >
        <img
          src="/assets/img/menas/image.png"
          className="h-16"
          alt="MenaWorld"
        />
      </a>

      <a
        href="https://pro-vision.vn/"
        className="flex-shrink-0"
      >
        <img
          src="/assets/img/general/provision-logo.png"
          className="h-16"
          alt="ProVision"
        />
      </a>
    </figure>
  );
};

export default Header;
