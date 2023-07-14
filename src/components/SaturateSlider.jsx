import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SaturationSlider({ value, onChange }) {
 
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight' && value < 100) {
          onChange((prevValue) => Math.min(prevValue + 1, 100));
        } else if (event.key === 'ArrowLeft' && value > 0) {
          onChange((prevValue) => Math.max(prevValue - 1, 0));
        }
      };

    const handleChange = (event, newValue) => {
        onChange(newValue);
      };
 
    useEffect(() => { 
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [value, onChange]);



  return (
    <Box width={200}>
      <Slider
        orientation="horizontal"
        value={value}
        onChange={handleChange}
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
