import React, { useRef, useState } from "react";
import Header from "../components/Headers/HeaderMenas";
import ARModelViewer from "../components/ARModelViewer/ARModelViewer";
import ARButtons from "../components/ARButtons";
import ARModal from "../components/ARModal";
import Footer from "../components/Footer";

const ARPage = ({ modelSrc, iosModelSrc, guideImages, logoModal }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modelRef = useRef(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <Header />
      <ARModelViewer modelRef={modelRef} src={modelSrc} iosSrc={iosModelSrc} />
      <ARButtons modelRef={modelRef} openModal={openModal} />
      <ARModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        logoModal={logoModal}
        guideImages={guideImages}
      />
      <Footer />
    </div>
  );
};

export default ARPage;
