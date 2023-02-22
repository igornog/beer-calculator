import './App.css';
import './App.scss';
import Header from './components/Header/Header';
import MainPreferences from './features/MainPreferences/MainPreferences';
import Calculator from './features/Calculator/Calculator';
import ProductSelectionModal from './components/Modal/ProductSelectionModal';
import { GlobalContext } from './context/GlobalContext'
import React from 'react';

const App: React.FunctionComponent = () => {
  const { modalOn, setModalOn, invitees } = React.useContext(GlobalContext)

  return (
    <div className="App">
      <Header />
      <MainPreferences />
      {invitees ?
      <Calculator setModalOn={setModalOn} /> : null}
      <ProductSelectionModal setModalOn={setModalOn} modalOn={modalOn} />
    </div>
  );
}

export default App;
