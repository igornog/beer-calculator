import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const DurationSlider: React.FunctionComponent<Props> = (
  props: Props
) => {

  const handleChange = (event: Event, newValue: number | number[]) => {
    props.setPreferences(newValue as number);
  };

  const marks = [
    {
      value: 1,
      label: `${props.preferences > 0 ? `${props.preferences}%`: '' } Cerveja`,
    },
    {
      value: 100,
      label: `${props.preferences > 0 ? `${100 - props.preferences}%`: '' } Drinks`,
    }
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        defaultValue={0}
        onChange={handleChange}
        step={1}
        disabled={props.disabled}
        min={0}
        max={100}
        marks={marks}
      />
      <Box display={'flex'} width={'100%'} justifyContent={'space-between'}>
      </Box>
    </Box>
  );
}

interface Props {
  setPreferences: (preferences: number) => void
  preferences: number
  disabled: boolean
}


export default DurationSlider