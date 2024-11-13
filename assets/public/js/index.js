const dataSrc = "/assets/data/products.json";
const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const clearButton = document.getElementById("clear-button");
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");

let debounceTimer;

document.addEventListener("DOMContentLoaded", function () {
  initSearchInput();
  initSidebar();
  initializeMenuFilters();

  displayProducts();
});

// sidebar //
// Hàm khởi tạo sự kiện
function initSidebar() {
  if (!sidebar || !toggleBtn) return;

  toggleBtn.addEventListener("click", toggleSidebar);
  document.addEventListener("click", handleOutsideClick);
}

// Hàm để mở/tắt sidebar
function toggleSidebar() {
  sidebar.classList.toggle("active");
}

// Hàm xử lý khi click ra ngoài sidebar
function handleOutsideClick(event) {
  // Kiểm tra nếu click ra ngoài sidebar và nút toggle
  if (
    !sidebar.contains(event.target) &&
    !toggleBtn.contains(event.target) &&
    sidebar.classList.contains("active")
  ) {
    toggleSidebar();
  }
}

async function getProducts(dataSrc) {
  try {
    const response = await fetch(dataSrc);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
    return [];
  }
}

function displayProducts() {
  // Gọi lại hàm tìm kiếm hoặc cập nhật hiển thị nếu cần
  const localProducts = getProductsFromLocalStorage();
  if (localProducts.length > 0) {
    renderProducts(localProducts);
  } else {
    // Nếu chưa có, fetch từ API và lưu vào localStorage
    fetchAndStoreProducts(dataSrc);
  }
}

function renderProducts(products) {
  productGrid.innerHTML = "";

  products.forEach((product, index) => {
    const productCard = `
      <div class="product-card" data-category="${product.category}">
        <img src="${product.logo}" class="logo_overlay" alt="AR Logo" />
        <img class="img_product" src="${product.image}" alt="${product.title}" />
        <h2>${product.title}</h2>
        <p class="price">$${product.price}</p>
        <p class="description">${product.description}</p>
       
        <a href="${product.link}" class="cta-button">Xem sản phẩm</a>

      </div>
    `;
    productGrid.innerHTML += productCard;

  });
}


function generateStarRating(index) {
  return `
    <div class="star-rating" data-id="rating-${index}">
      <i class="fas fa-star" data-index="1"></i>
      <i class="fas fa-star" data-index="2"></i>
      <i class="fas fa-star" data-index="3"></i>
      <i class="fas fa-star" data-index="4"></i>
      <i class="fas fa-star" data-index="5"></i>
    </div>
  `;
}


function addStarRating(index) {
  const starContainer = document.querySelector(`[data-id="rating-${index}"]`);
  if (!starContainer) return;

  const stars = starContainer.querySelectorAll("i");
  let savedRating = parseInt(localStorage.getItem(`rating-${index}`)) || 0;

  updateStars(stars, savedRating);

  stars.forEach((star, i) => {
    star.addEventListener("click", () => {
      const rating = i + 1;
      localStorage.setItem(`rating-${index}`, rating);
      updateStars(stars, rating);
      console.log(`Đánh giá của bạn cho rating-${index}: ${rating} sao`);
    });

    star.addEventListener("mouseover", () => {
      updateStars(stars, i + 1);
    });

    starContainer.addEventListener("mouseleave", () => {
      updateStars(stars, savedRating);
    });
  });
}



function updateStars(stars, rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}




// Hàm lưu trữ dữ liệu vào localStorage
function saveProductsToLocalStorage(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

async function fetchAndStoreProducts(dataSrc) {
  const products = await getProducts(dataSrc);
  saveProductsToLocalStorage(products);
  renderProducts(products);
}

// Hàm lấy dữ liệu từ localStorage
function getProductsFromLocalStorage() {
  const products = localStorage.getItem("products");
  return products ? JSON.parse(products) : [];
}

function searchProducts(keyword) {
  const products = getProductsFromLocalStorage();

  if (!Array.isArray(products)) {
    console.error("Dữ liệu sản phẩm không hợp lệ", products);
    return [];
  }

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(keyword.toLowerCase()) ||
      product.description.toLowerCase().includes(keyword.toLowerCase())
  );

  renderProducts(filteredProducts);
}

function filterProductsByCategory(category) {
  const products = getProductsFromLocalStorage();

  const filteredProducts = category === "all"
  ? products
  : products.filter(product => product.category === category);

  renderProducts(filteredProducts);
}

// Khởi tạo sự kiện cho ô tìm kiếm và nút "X"
function initSearchInput() {
  if (!searchInput || !clearButton) return;

  searchInput.addEventListener("input", handleDebouncedSearchInput);
  clearButton.addEventListener("click", handleClearButtonClick);
}

function handleDebouncedSearchInput() {
  clearButton.style.display = searchInput.value ? "block" : "none";

  // Nếu người dùng tiếp tục nhập, hủy timer cũ
  clearTimeout(debounceTimer);

  // Đặt timer mới, chỉ thực hiện xử lý khi người dùng ngừng nhập 1 giây
  debounceTimer = setTimeout(() => {
    handleSearchInput();
  }, 600);
}

// Xử lý sự kiện khi người dùng nhập vào ô tìm kiếm
function handleSearchInput() {
  console.log("Đang xử lý tìm kiếm...");
  searchProducts(searchInput.value);
}

// Xử lý sự kiện khi người dùng nhấn vào nút "X"
function handleClearButtonClick() {
  searchInput.value = "";
  clearButton.style.display = "none";
  searchInput.focus();

  displayProducts();
}

function initializeMenuFilters() {
  const menuItems = document.querySelectorAll(".menu li a");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", handleMenuClick);
  });
}

// Hàm xử lý khi người dùng nhấn vào một mục menu
function handleMenuClick(event) {
  event.preventDefault();

  // Lấy giá trị data-category từ menu
  const category = event.target.getAttribute("data-category");
  
  clearButton.style.display = searchInput.value ? "block" : "none";
  searchInput.value = event.target.textContent.trim();

  filterProductsByCategory(category);
}
