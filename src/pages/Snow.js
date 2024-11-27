import React from "react";
import ARPage from "../components/ARPage";
import { AR_TOWER_GUIDE_IMAGES } from "../constants";

const Snow = () => {
  return (
    <ARPage
      modelSrc="/assets/model3d/falling_snow_loop/scene.gltf"
      iosModelSrc="/assets/model3d/falling_snow_loop/falling_snow_loop.usdz"
      guideImages={AR_TOWER_GUIDE_IMAGES}
    />
  );
};

export default Snow;
