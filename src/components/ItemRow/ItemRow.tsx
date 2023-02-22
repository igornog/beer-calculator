import * as React from 'react';
import { Box, Button, TextField } from '@mui/material';
import './ItemRow.scss'
import { DrinkTypes } from '../../utils/types';
import { GlobalContext } from '../../context/GlobalContext';

const ItemRow: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { setModalOn } = React.useContext(GlobalContext)

  return (
    <Box className='itemRow' display={'flex'} gap={'15px'}>
      <p>Quantas cervejas?</p>
      <TextField
        InputProps={{
          inputProps: { min: 0 }
        }}
        placeholder='Escolha a marca'
        value={props.beersQty ? props.beersQty : ''}
        contentEditable={false}
      />
      <Button variant="contained" onClick={() => setModalOn(true)}>Escolher marca</Button>
    </Box>
  )
}

interface Props {
  setModal: (modalOn: boolean) => void
  type: DrinkTypes
  beersQty?: number
}

export default ItemRow