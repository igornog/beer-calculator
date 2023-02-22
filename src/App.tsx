import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MainPreferences from './features/MainPreferences/MainPreferences';
import Calculator from './features/Calculator/Calculator';
import ProductSelectionDrawer from './components/Drawer/ProductSelectionDrawer';
import { GlobalContext } from './context/GlobalContext'
import { Box } from '@mui/material';
import CartDrawer from './components/Drawer/CartDrawer';

const App: React.FunctionComponent = () => {
  const { modalOn, setModalOn, invitees, setCartOn, cartOn } = React.useContext(GlobalContext)

  return (
    <div className="App">
      <Header />
      <MainPreferences />
      {invitees ?
        <Calculator setModalOn={setModalOn} /> :
        <>
          <Box margin={'20px 5vw'} textAlign={'start'} display={'flex'} alignItems={'baseline'}>
            <img src="https://img.icons8.com/metro/52/null/long-arrow-up.png" alt='arrow' />
            <h2>Comece adicionando os convidados aqui</h2>
          </Box>
        </>
      }
      <ProductSelectionDrawer setModalOn={setModalOn} modalOn={modalOn} />
      <CartDrawer setCartOn={setCartOn} cartOn={cartOn} />
    </div>
  );
}

export default App;
