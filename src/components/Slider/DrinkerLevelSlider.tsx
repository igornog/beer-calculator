import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
;

const marks = [
  {
    value: 1,
    label: 'Rolê tranquilo',
  },
  {
    value: 2,
    label: 'Churrasco animado',
  },
  {
    value: 3,
    label: 'Doideira',
  },
];

const DrinkerLevelSlider: React.FunctionComponent<Props> = (
  props: Props
) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    props.setLevel((newValue) as number);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        defaultValue={0}
        step={1}
        disabled={props.disabled}
        max={3}
        min={1}
        marks={marks}
        onChange={handleChange}
      />
    </Box>
  );
}

interface Props {
  setLevel: (level: number) => void
  disabled: boolean
}

export default DrinkerLevelSlider