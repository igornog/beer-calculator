import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = Array.from(Array(10).keys()).map((key) => ({
  value: key + 1,
  label: (key + 1).toString(),
}))

const DurationSlider: React.FunctionComponent<Props> = (
  props: Props
) => {

  const handleChange = (event: Event, newValue: number | number[]) => {
    props.setDuration(newValue as number);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        defaultValue={4}
        step={1}
        marks={marks}
        min={1}
        max={10}
        valueLabelDisplay="auto"
        onChange={handleChange}
      />
    </Box>
  );
}

interface Props {
  setDuration: (duration: number) => void
}

export default DurationSlider