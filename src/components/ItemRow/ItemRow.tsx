import * as React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { DrinkTypes } from '../../utils/types';
import { GlobalContext } from '../../context/GlobalContext';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  display: flex;
  gap: 15px;
  align-items: center;
  
  input {
    font-size: 1.25rem;
    font-weight: bold;
  }
`

const ItemRow: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { setModalOn } = React.useContext(GlobalContext)

  return (
    <StyledBox width={props.myBeer ? '50%' : 'auto'}>
      <p>Quantas cervejas?</p>
      {props.myBeer ?
        <TextField
          InputProps={{
            inputProps: { 
              min: 0,
              readOnly: true,
             }
          }}
          placeholder='Escolha a tamanho'
          value={props.beersQty ? props.beersQty : ''}
          contentEditable={false}
        />
        :
        <Button variant="contained" onClick={() => setModalOn(true)}>Escolher marca</Button>
      }
    </StyledBox>
  )
}

interface Props {
  setModal: (modalOn: boolean) => void
  type: DrinkTypes
  beersQty?: number
  myBeer?: string
  size: string
}

export default ItemRow