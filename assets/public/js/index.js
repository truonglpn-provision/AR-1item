const dataSrc = "/assets/data/products.json";
const menuContent = document.querySelector(".menu-content");



document.addEventListener('DOMContentLoaded', function() {
  fetchProducts();
});

// Đóng menu khi click ra ngoài
window.addEventListener("click", function (event) {
  if (!menuBtn.contains(event.target) && !menuContent.contains(event.target)) {
    menuContent.style.display = "none";
  }
});


function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.querySelector(".toggle-btn");
  sidebar.classList.toggle("active");
  toggleBtn.classList.toggle("active");
}

async function fetchProducts() {
  try {
    const response = await fetch(dataSrc);
    const products = await response.json();
    const productGrid = document.getElementById("product-grid");


    products.forEach((product) => {
      const productCard = `
          <div class="product-card">
            <img src="${product.logo}" class="logo_overlay" alt="AR Logo" />
            <img class="img_product" src="${product.image}" alt="${product.title}" />
            <h2>${product.title}</h2>
            <p class="price">${product.price}</p>
            <p class="description">${product.description}</p>
            <a href="${product.link}" class="cta-button">Xem sản phẩm</a>
          </div>
        `;
      productGrid.innerHTML += productCard;
    });
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu sản phẩm:", error);
  }
}


