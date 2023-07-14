import React, { useState } from 'react';
import Magnifier from 'react-glass-magnifier';
import cityscapeLarge from './images/cityscape-large.jpg';
import cityscapeSmall from './images/cityscape-small.jpg';

export default function App() {
  const [saturate, setSaturate] = useState(0);
  const [zoomFactor, setZoomFactor] = useState(1);

  let imageStyle = {
    filter: `saturate(${saturate})`
  };

  return (
    <div className="image-container">
      <Magnifier
        imageUrl={cityscapeSmall}
        imgAlt="cityscape"
        zoomFactor={zoomFactor}
        glassDimension={50}
        largeImageUrl={cityscapeLarge}
        glassBorderColor=""
        glassBorderWidth={2}
        imageStyle={imageStyle}
      />
    </div>
  );
}
