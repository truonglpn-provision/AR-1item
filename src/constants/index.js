const AR_GUIDE_TEMPLATE = [
  {
    fileName: "modal_01.png",
    alt: "Hình ảnh hướng dẫn 1",
    description:
      "Hướng điện thoại của bạn về bề mặt phẳng, chẳng hạn như bàn hoặc sàn nhà và di chuyển điện thoại.",
  },
  {
    fileName: "modal_02.png",
    alt: "Hình ảnh hướng dẫn 2",
    description: "Nhấn nút ● để chụp ảnh. Giữ nút để quay video.",
  },
  {
    fileName: "modal_03.png",
    alt: "Hình ảnh hướng dẫn 3",
    description:
      "Có thể di chuyển, phóng to và thu nhỏ. Nếu AR không hiển thị đúng, hãy thay đổi kích thước để cải thiện hiển thị.",
  },
];

const createARGuideImages = (basePath) => {
  return AR_GUIDE_TEMPLATE.map((item) => ({
    src: `${basePath}/${item.fileName}`,
    alt: item.alt,
    description: item.description,
  }))
}


export const AR_TREX_GUIDE_IMAGES = createARGuideImages(
  "/assets/img/menas/dinosaur"
);

export const AR_GOLDFISH_GUIDE_IMAGES = createARGuideImages(
  "/assets/img/menas/goldenfish"
);

export const AR_TOWER_GUIDE_IMAGES = createARGuideImages(
  "/assets/img/construct"
);


export const foodItems = [
  {
    name: "Banana",
    price: "18.000Đ",
    imageSrc: "/assets/img/restaurant/chuoi.jpg",
    modelSrc: "/assets/model3d/restaurant/glb/low-poly_banana.glb",
    iosSrc: "",
  },
  {
    name: "Bread",
    price: "200.000Đ",
    imageSrc: "/assets/img/restaurant/banh_my.jpg",
    modelSrc: "/assets/model3d/restaurant/gltf/a_regular_loaf_of_white_bread/scene.gltf",
    iosSrc: "",
  },
  {
    name: "Birthday Cake",
    price: "180.000Đ",
    imageSrc: "/assets/img/restaurant/birth_cake.jpg",
    modelSrc:
      "/assets/model3d/restaurant/glb/easter_decoration_-_lowpoly_cake.glb",
    iosSrc: "",
  },
  {
    name: "Thức ăn nhanh MRE",
    price: "225.000Đ",
    imageSrc: "/assets/img/restaurant/thuc_an_nhanh_mre.jpg",
    modelSrc: "/assets/model3d/restaurant/glb/mre_individual_ration_food.glb",
    iosSrc: "",
  },
];

export const foodItemDefault = "/assets/model3d/restaurant/gltf/a_regular_loaf_of_white_bread/scene.gltf";

export const drinkItems = [
  {
    name: "Scotch Whiskey",
    price: "9.990.000Đ",
    imageSrc: "/assets/img/restaurant/beer_bottle.jpg",
    modelSrc: "/assets/model3d/restaurant/gltf/beer_bottels/scene.gltf",
    iosSrc: "",
  },
  {
    name: "Bottle",
    price: "10.000Đ",
    imageSrc: "/assets/img/restaurant/bottle.jpg",
    modelSrc: "/assets/model3d/restaurant/glb/bottle.glb",
    iosSrc: "",
  },
];
