import React, { useRef, useState } from "react";
import { AR_TREX_GUIDE_IMAGES } from "../constants";
import ARPage from "../components/ARPage";

const Dinosaur = () => {
  return (
    <ARPage
      modelSrc="/assets/model3d/menas/dinosaur/T-REX3.gltf"
      iosModelSrc="/assets/model3d/menas/dinosaur/T-REX3.usdz"
      guideImages={AR_TREX_GUIDE_IMAGES}
      logoModal={true}
    />
  );
};

export default Dinosaur;
