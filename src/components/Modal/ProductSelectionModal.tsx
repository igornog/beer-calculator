
import { Box, Button, Drawer, TextField } from '@mui/material';
import { useContext } from 'react'
import { convertHexToRGBA } from '../../utils/helpers';
import { black } from '../../utils/colors';
import BrandCard from '../Card/BrandCard';
import { GlobalContext } from '../../context/GlobalContext';
import React from 'react';
import { BeerBrands } from '../../utils/types';

const ProductSelectionModal: React.FunctionComponent<Props> = (
  props: Props
) => {

  return (
    <Drawer
      anchor={'right'}
      hideBackdrop={false}
      open={props.modalOn}
      onClose={() => props.setModalOn(false)}
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
      <Box display={'flex'} height={'100%'} flexDirection={'column'} padding={'20px'}>
        <h2>SELECIONE SUA MARCA FAVORITA</h2>
        <Box display={'flex'} height={'100%'} flexDirection={'column'} gap={'50px'} padding={'50px 0'}>
          <BrandCard brand={BeerBrands.Heineken} onClose={props.setModalOn} />
          <BrandCard brand={BeerBrands.Amstel} onClose={props.setModalOn}/>
          <BrandCard brand={BeerBrands.Budweiser} onClose={props.setModalOn}/>
          <BrandCard brand={BeerBrands.Brahma} onClose={props.setModalOn}/>
        </Box>
      </Box>
    </Drawer>
  )
}

interface Props {
  setModalOn: (modalOn: boolean) => void
  modalOn: boolean
}

export default ProductSelectionModal