import React from 'react';
import styles from './ARModelViewer.module.css';

const ARModelViewer = ({ modelRef, src, iosSrc, className }) => {
  return (
    <figure className={`w-full ${className} flex justify-center py-4`}>
      <model-viewer
        ref={modelRef}
        src={src}
        ios-src={iosSrc}
        autoplay
        ar
        ar-modes="scene-viewer quick-look webxr"
        camera-controls
        auto-rotate
        camera-orbit="0deg 90deg 8m"
        field-of-view="20deg"
        shadow-intensity="1"
        environment-image="neutral"
        style={{
          width: '100%',
          height: '400px',
          maxHeight: '70vh',
          minHeight: '50vh',
          outline: 'none',
        }}
        className={styles.modelViewer}
      ></model-viewer>
    </figure>
  );
};

export default ARModelViewer;
