import * as React from 'react';
import './Header.scss';
import { GlobalContext } from '../../context/GlobalContext';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { purple, white } from '../../utils/colors';
import cart from '../../assets/icons/cart.svg'

const StyledButton = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 40px;
  position: absolute;
  top: 3vh;
  right: 0;
  cursor: pointer;

  background-color: ${purple};
  color: ${white};
  border-radius: 12px 0 0 12px;

  img {
    width: 24px;
  }
`

const StyledLogo = styled.img`
    transition: 3s ease-in-out all;
    animation: shake 1.75s;
    animation-iteration-count: infinite;
  
  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(4deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

export const Header: React.FunctionComponent = () => {
  const { setCartOn, myBeer } = React.useContext(GlobalContext)

  return (
    <header>
      <StyledLogo src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-beers-brewery-flaticons-lineal-color-flat-icons.png" alt='logo' />
      {myBeer ?
        <Box>
          <StyledButton onClick={() => setCartOn(true)} >
            <img src={cart} alt='cart' />
            <h4>Total: R$ 140,09</h4>
          </StyledButton>
        </Box> : null}
    </header>
  )
}