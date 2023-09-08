/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { AppProvider } from './context/AppContext';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';

import './index.css';
// import { BackgroundCss } from './Components/background/BackgroundCss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BackgroundCss /> */}
    <BrowserRouter>
      <AppProvider>
        <Header />
        <App />
        <Footer />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
