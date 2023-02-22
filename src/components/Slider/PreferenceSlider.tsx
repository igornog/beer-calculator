import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function DurationSlider() {
  const [value, setValue] = React.useState(50)

  const marks = [
    {
      value: 1,
      label: `${value}% Cerveja`,
    },
    {
      value: 100,
      label: `${100 - value}% Drinks`,
    }
  ];

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        defaultValue={50}
        onChange={handleChange}
        step={1}
        min={0}
        max={100}
        marks={marks}
      />
      <Box display={'flex'} width={'100%'} justifyContent={'space-between'}>
      </Box>
    </Box>
  );
}