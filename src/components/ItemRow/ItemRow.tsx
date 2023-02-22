import * as React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { DrinkTypes } from '../../utils/types';
import { GlobalContext } from '../../context/GlobalContext';
const ItemRow: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { setModalOn } = React.useContext(GlobalContext)

  return (
    <Box className='itemRow' display={'flex'} gap={'15px'} alignItems={'center'} width={props.myBeer ? '20%' : 'auto'}>
      <p>Quantas cervejas?</p>
      {props.myBeer ?
        <TextField
          InputProps={{
            inputProps: { 
              min: 0,
              readOnly: true
             }
          }}
          placeholder='Escolha a tamanho'
          value={props.beersQty ? props.beersQty : ''}
          contentEditable={false}
        />
        :
        <Button variant="contained" onClick={() => setModalOn(true)}>Escolher marca</Button>
      }
    </Box>
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