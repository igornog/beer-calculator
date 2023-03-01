import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import MainPreferences from './features/MainPreferences/MainPreferences';
import Calculator from './features/Calculator/Calculator';
import ProductSelectionDrawer from './components/Drawer/ProductSelectionDrawer';
import { GlobalContext } from './context/GlobalContext'
import CartDrawer from './components/Drawer/CartDrawer';

const App: React.FunctionComponent = () => {
  const { modalOn, setModalOn, preferences, invitees, level, duration, setCartOn, cartOn } = React.useContext(GlobalContext)

  return (
    <div className="App">
      <Header />
      <MainPreferences />
      {invitees && duration && preferences && level ?
        <Calculator setModalOn={setModalOn} /> : null
      }
      <ProductSelectionDrawer setModalOn={setModalOn} modalOn={modalOn} />
      <CartDrawer setCartOn={setCartOn} cartOn={cartOn} />
    </div>
  );
}

export default App;
