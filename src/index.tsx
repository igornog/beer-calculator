import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { myAppTheme } from './utils/themes/theme'
import { ThemeProvider } from '@mui/material'
import { GlobalProvider } from './context/GlobalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  < ThemeProvider theme={myAppTheme}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </ ThemeProvider >
);