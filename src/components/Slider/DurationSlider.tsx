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
        defaultValue={0}
        step={1}
        disabled={props.disabled}
        marks={marks}
        min={0}
        max={10}
        valueLabelDisplay="auto"
        onChange={handleChange}
      />
    </Box>
  );
}

interface Props {
  setDuration: (duration: number) => void
  disabled: boolean
}

export default DurationSlider