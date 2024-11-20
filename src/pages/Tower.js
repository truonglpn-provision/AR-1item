import React from "react";
import { AR_TOWER_GUIDE_IMAGES } from "../constants";
import ARPage from "../components/ARPage";

const Tower = () => {
  return (
    <ARPage
      modelSrc="/assets/model3d/construct/tower/building_big.gltf"
      iosModelSrc="/assets/model3d/construct/tower/building_big.usdz"
      guideImages={AR_TOWER_GUIDE_IMAGES}
    />
  );
};

export default Tower;
