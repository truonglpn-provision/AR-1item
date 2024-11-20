import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Headers/Header";
import Sidebar from "../components/Sidebar";
import Toggle from "../components/Toggle";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await fetch("/assets/data/products.json");
        const productData = await productRes.json();
        setProducts(productData);
        setFilteredProducts(productData);

        const menuRes = await fetch("/assets/data/menus.json");
        const menuData = await menuRes.json();
        setMenuItems(menuData);
      }
      catch (err) {
        console.error("Loi khi tai du lieu", err)
      }
    }
    fetchData();
  }, []); 
 
  const handleSearch = useCallback(
    (keyword) => {
      if (keyword.trim() === "") {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter(
          (product) =>
            product.title.toLowerCase().includes(keyword.toLowerCase()) ||
            product.description.toLowerCase().includes(keyword.toLowerCase())
        );

        setFilteredProducts(filtered);
      }
    },
    [products]
  );

  const handleCategorySelect = useCallback(
    (category) => {
      if (category === "all") {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter(
          (product) => product.category === category
        );
        setFilteredProducts(filtered);
      }
    },
    [products]
  );

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        menuItems={menuItems}
        onCategorySelect={handleCategorySelect}
        onSearch={handleSearch}
      />
      <div className={`flex-grow transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        <Header />
        <div className="container mx-auto p-5">
          <Toggle onClick={toggleSidebar} isOpen={isSidebarOpen} />
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Home;
