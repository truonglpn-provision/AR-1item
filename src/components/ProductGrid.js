import React from "react";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="group product-card bg-white p-6 rounded-lg shadow-md relative overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
        >
          {product.logo && (
            <img
              src={product.logo}
              alt="Logo"
              className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white p-1 shadow"
            />
          )}

          <img
            src={`${process.env.REACT_APP_PUBLIC_URL}${product.image}`}
            alt={product.title}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
          />

          <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[3.5rem] overflow-hidden">
            {product.title}
          </h2>

          <p className="text-gray-600 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 min-h-[4.5rem] group-hover:max-h-[10rem] overflow-hidden">
            {product.description}
          </p>

          <p className="text-red-500 font-bold text-lg mb-6">${product.price}</p>

          <a
            href={product.link}
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-300"
          >
            Xem sản phẩm
          </a>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProductGrid);
