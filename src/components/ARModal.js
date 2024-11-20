import React from "react";
import { FaTimes } from "react-icons/fa";


const ARModal = ({ isOpen, closeModal, logoModal, guideImages = [] }) => {
  if (!isOpen) return null;

  return (
    <section
      id="modalArea"
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
      <div id="modalBg" className="fixed inset-0 cursor-pointer" onClick={closeModal}></div>

      <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full p-6 overflow-y-auto max-h-[80vh]">
        <button
          id="closeModal"
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FaTimes size={24} />
        </button>

        {logoModal && (
          <img
            src="/assets/img/menas/dinosaur/logo_dinosaur.png"
            className="h-16 w-auto mx-auto mb-4"
            alt="Dinosaur Logo"
          />
        )}

        <p className="text-2xl font-bold text-center mb-4">Cách sử dụng AR</p>

        <p className="text-center mb-4">
          <span className="font-bold">Nhấn vào "Khởi động AR"</span>
          <br />
          để bắt đầu AR
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg shadow-md w-full mb-6">
          Khởi động AR
        </button>

        {guideImages.length > 0 ? (
          guideImages.map((image, index) => (
            <React.Fragment key={index}>
              <p className="text-center mb-6">{image.description}</p>
              <figure className="mb-6">
                <img
                  src={image.src}
                  className="w-full rounded-md"
                  alt={image.alt}
                />
              </figure>
            </React.Fragment>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Không có hướng dẫn nào được tìm thấy.
          </p>
        )}

        <ul className="list-disc pl-6 mb-6 text-sm">
          <li className="mb-2">
            <span className="font-bold">Phóng to/thu nhỏ:</span> Dùng hai ngón
            tay để phóng to/thu nhỏ
          </li>
          <li className="mb-2">
            <span className="font-bold">Di chuyển:</span> Giữ một ngón tay để di
            chuyển
          </li>
          <li className="mb-2">
            <span className="font-bold">Điều chỉnh góc:</span> Giữ một ngón tay
            và di chuyển ngón khác để điều chỉnh góc
          </li>
        </ul>

        <div className="text-center mb-6">
          <p className="text-sm">
            <span>
              Nội dung này có thể sử dụng trên các thiết bị hỗ trợ AR:
            </span>
          </p>
          <p className="text-sm text-gray-600">
            iOS: iPhone6S trở lên / iOS11.0 trở lên
            <br />
            Android: Tham khảo{" "}
            <a
              href="https://developers.google.com/ar/devices?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              tại đây
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ARModal;
