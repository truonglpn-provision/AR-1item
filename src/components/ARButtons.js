import React from 'react';

const ARButtons = ({ modelRef, openModal }) => {
  // Hàm khởi động AR
  const handleARStart = () => {
    if (modelRef.current) {
      modelRef.current.activateAR(); // Kích hoạt chế độ AR
    }
  };

  return (
    <div className="flex justify-center gap-4 mt-8">
      {/* Nút khởi động AR */}
      <button
        onClick={handleARStart}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg shadow-md"
      >
        Khởi động AR
      </button>

      {/* Nút mở modal hướng dẫn */}
      <button
        onClick={openModal}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg shadow-md"
      >
        Cách sử dụng
      </button>
    </div>
  );
};

export default ARButtons;
