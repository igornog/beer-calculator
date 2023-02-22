import * as React from 'react';
import './Header.scss';
import { GlobalContext } from '../../context/GlobalContext';
import { Box } from '@mui/material';
import { MoneySend } from 'iconsax-react';
import styled from 'styled-components';
import { green } from '../../utils/colors';

const StyledButton = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  position: absolute;
  top: 5vh;
  right: 0;
  cursor: pointer;

  background-color: ${green};
  border-radius: 12px 0 0 12px;
`

const Header: React.FunctionComponent = () => {
  const { setCartOn, myBeer } = React.useContext(GlobalContext)

  return (
    <header>
      <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-beers-brewery-flaticons-lineal-color-flat-icons.png" alt='logo' />
      {myBeer ?
      <Box>
        <StyledButton onClick={() => setCartOn(true)} ><MoneySend />        <h4>Total: R$ 140,09</h4></StyledButton>
      </Box> : null }
    </header>
  )
}
export default Header