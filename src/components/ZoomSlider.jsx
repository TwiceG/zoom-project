import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function ZoomSlider({ value, onChange }) {

    const handleScroll = (event) => {
        const delta = Math.sign(event.deltaY);
        if (delta > 0 && value > 1) {
            onChange((prevValue) => Math.max(prevValue - 1, 1));
        } else if (delta < 0 && value < 10) {
            onChange((prevValue) => Math.min(prevValue + 1, 10));
        }
        };

    const handleChange = (event, newValue) => {
        onChange(newValue);
    };

    
    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => {
        window.removeEventListener('wheel', handleScroll);
        };
    }, [value, onChange]);

 

  return (
    <Box height={200}>
      <Slider
        orientation="vertical"
        value={value}
        onChange={handleChange}
        min={1}
        max={10}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
