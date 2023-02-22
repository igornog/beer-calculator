
import { Box, Drawer } from '@mui/material';
import { convertHexToRGBA } from '../../utils/helpers';
import { black } from '../../utils/colors';
import React from 'react';

const CartDrawer: React.FunctionComponent<Props> = (
  props: Props
) => {

  return (
    <Drawer
      anchor={'right'}
      hideBackdrop={false}
      open={props.cartOn}
      onClose={() => props.setCartOn(false)}
      transitionDuration={{ enter: 600, exit: 300 }}
      BackdropProps={{
        style: {
          backgroundColor: convertHexToRGBA(black, 0.5),
        },
      }}
      PaperProps={{
        style: {
          width: 'calc(100% - 70vw)',
          boxShadow: 'none',
        },
      }}
    >
      <Box display={'flex'} height={'100%'} flexDirection={'column'} padding={'20px'}>
        <h2>MY CART</h2>
        <Box display={'flex'} height={'100%'} flexDirection={'column'} gap={'50px'} padding={'50px 0'}>
          <p>test</p>
        </Box>
      </Box>
    </Drawer>
  )
}

interface Props {
  setCartOn: (modalOn: boolean) => void
  cartOn: boolean
}

export default CartDrawer