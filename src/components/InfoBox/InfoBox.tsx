
import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: relative;

  h4 {
    position: absolute;
    top: 70px;
    width: 250px;
  }
`

const InfoBox: React.FunctionComponent<Props> = (
  props: Props
) => {
  return (
    <StyledBox margin={'20px 0 0'} >
      <img src="https://img.icons8.com/metro/52/null/long-arrow-up.png" alt='arrow' />
      <h4>{props.text}</h4>
    </StyledBox>
  )
}

interface Props {
  text: string
}

export default InfoBox