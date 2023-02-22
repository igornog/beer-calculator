import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Stack } from '@mui/material';

const CustomSlider: React.FunctionComponent = () => {
  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" >
        <Slider />
      </Stack>
    </Box>
  );
}

export default CustomSlider
