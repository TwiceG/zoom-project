import React, { useEffect, useState } from 'react';
import Magnifier from 'react-glass-magnifier';
import cityscapeLarge from './images/cityscape-large.jpg';
import cityscapeSmall from './images/cityscape-small.jpg';
import ZoomSlider from './components/ZoomSlider';
import SaturateSlider from './components/SaturateSlider';
import './App.css';

export default function App() {
  const [saturate, setSaturate] = useState(0);
  const [zoomFactor, setZoomFactor] = useState(2);
  
  const magnifierStyle = {
    '--saturate-value': `${saturate}%`,
  };

  return (
    <div className='app-container'>
      <div className="image-container">
        
        <div className='image-wrapper' style={magnifierStyle}>
          <Magnifier
          imageUrl={cityscapeSmall}
          imgAlt="cityscape"
          zoomFactor={zoomFactor}
          glassDimension={50}
          largeImageUrl={cityscapeLarge}
          glassBorderColor=""
          glassBorderWidth={2}
        />  
        </div>
        
        
        <div className='zoom-slider'>
          <ZoomSlider value={zoomFactor} onChange={setZoomFactor} />
        </div>
        <div className='saturation-slider'>
          <SaturateSlider value={saturate} onChange={setSaturate} />
        </div>
      </div>
    </div>
  );
}
