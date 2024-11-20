import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 shadow-lg flex flex-col sm:flex-row items-center justify-center gap-2 px-4 rounded-lg mt-5 fixed bottom-0 w-full">
      <img
        src="/assets/img/general/AR_works.png"
        alt="ARWorks"
        className="max-w-[80px] h-auto flex-shrink-0 mb-2 sm:mb-0"
      />
      
      <p className="text-center text-xs sm:text-sm md:text-base font-semibold">
        © 2024 AR Works | Designed by ProVision Inc.
      </p>
    </footer>
  );
};

export default Footer;
