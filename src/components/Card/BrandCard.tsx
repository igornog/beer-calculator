
import { Box, Button, Card } from '@mui/material';
import * as React from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  display: flex;
  padding: 30px;
  width: auto;
  align-items: center;
  text-align: start;
  box-shadow: none;
  cursor: pointer;

  img {
    height: -webkit-fill-available;
  }

  h3 {
    margin-top: 0;
  }
`

const BrandCard: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { setMyBeer } = React.useContext(GlobalContext)

  const setBeer = () => {
    setMyBeer(props.brand)
    props.onClose(false)
  }

  return (
    <StyledCard onClick={setBeer}>
      <img src="https://img.icons8.com/plasticine/100/null/beer-bottle.png" alt='beer-bottle' />
      <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
        <h3>{props.brand}</h3>
        <h3>R$ 3,98</h3>
      </Box>
    </StyledCard>
  )
}

interface Props {
  brand: string
  onClose: (modalOn: boolean) => void
}

export default BrandCard