import React from "react";
import { AR_GOLDFISH_GUIDE_IMAGES } from "../constants";
import ARPage from "../components/ARPage";

const Goldfish = () => {
 
  return (
    <ARPage
      modelSrc="/assets/model3d/menas/goldenfish/kingyo_small.gltf"
      iosModelSrc="/assets/model3d/menas/goldenfish/kingyo_small.usdz"
      guideImages={AR_GOLDFISH_GUIDE_IMAGES}
    />
  );
};

export default Goldfish;
