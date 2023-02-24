
import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import * as React from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import styled from 'styled-components';

const StyledFormControl = styled(FormControl)`
  label {
    flex-direction: column-reverse;
    span {
      font-size: 10px;
    }
  }
`

const SizeOptions: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { setSize, size } = React.useContext(GlobalContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
  };

  return (
    <StyledFormControl >
      {/* <FormLabel id="radio-buttons-group-label">Tamanho</FormLabel> */}
      <RadioGroup
        defaultValue="355"
        value={size}
        onChange={handleChange}
      >
        <Box display={'flex'} flexDirection={'row'} gap={'20px'}>
          <FormControlLabel value="355" control={<Radio />} label="Lata (350ml)" />
          <FormControlLabel value="330" control={<Radio />} label="Long Neck (330ml)" />
          <FormControlLabel value="600" control={<Radio />} label="Garrafa (600ml)" />
        </Box>
      </RadioGroup>
    </StyledFormControl>
  )
}

interface Props {
}

export default SizeOptions