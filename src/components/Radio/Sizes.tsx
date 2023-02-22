
import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import * as React from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const SizeOptions: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { setSize, size } = React.useContext(GlobalContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
  };

  return (
    <FormControl>
      {/* <FormLabel id="radio-buttons-group-label">Tamanho</FormLabel> */}
      <RadioGroup
        defaultValue="Lata"
        value={size}
        onChange={handleChange}
      >
        <Box display={'flex'} flexDirection={'row'}>
          <FormControlLabel value="355" control={<Radio />} label="Lata (355ml)" />
          <FormControlLabel value="330" control={<Radio />} label="Long Neck (330ml)" />
          <FormControlLabel value="600" control={<Radio />} label="Garrafa (600ml)" />
        </Box>
      </RadioGroup>
    </FormControl>
  )
}

interface Props {
}

export default SizeOptions