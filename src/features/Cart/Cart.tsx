
import React from 'react';
import { Box, Drawer } from '@mui/material';
import { convertHexToRGBA } from '../../utils/helpers';
import { black } from '../../utils/colors';

const CartDrawer: React.FunctionComponent<Props> = (
  props: Props
) => {

  return (
    <Drawer
      anchor={'right'}
      hideBackdrop={false}
      open={props.cardOn}
      onClose={() => props.setCardOn(false)}
      transitionDuration={{ enter: 600, exit: 300 }}
      BackdropProps={{
        style: {
          backgroundColor: convertHexToRGBA(black, 0.5),
        },
      }}
      PaperProps={{
        style: {
          width: 'calc(100% - 15vw)',
          boxShadow: 'none',
        },
      }}
    >
      <Box>
        <p>Cart</p>
      </Box>
    </Drawer>
  )
}

interface Props {
  setCardOn: (cardOn: boolean) => void
  cardOn: boolean
}

export default CartDrawer