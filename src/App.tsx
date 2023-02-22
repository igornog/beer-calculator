import './App.css';
import './App.scss';
import Header from './components/Header/Header';
import MainPreferences from './features/MainPreferences/MainPreferences';
import Calculator from './features/Calculator/Calculator';
import ProductSelectionModal from './components/Modal/ProductSelectionModal';
import { GlobalContext } from './context/GlobalContext'
import React from 'react';
import { Box, Container } from '@mui/material';

const App: React.FunctionComponent = () => {
  const { modalOn, setModalOn, invitees } = React.useContext(GlobalContext)

  return (
    <div className="App">
      <Header />
      <MainPreferences />
      {invitees ?
        <Calculator setModalOn={setModalOn} /> :
        <Box margin={'20px 5vw'} textAlign={'start'} display={'flex'} alignItems={'baseline'}>
          <img src="https://img.icons8.com/metro/52/null/long-arrow-up.png" alt='arrow' />
          <h2>Adicione convidados aqui</h2>
        </Box>}
      <ProductSelectionModal setModalOn={setModalOn} modalOn={modalOn} />
    </div>
  );
}

export default App;
