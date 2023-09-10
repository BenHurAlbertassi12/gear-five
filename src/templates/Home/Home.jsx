import React from 'react';
import { TitleHome } from './TitleHome/TitleHome';
import { Footer } from '../../Components/Footer/Footer';

import './Home.css';

import { HeaderPortfoil } from './HeaderHome/HeaderPortifoil/HeaderPortfoil';
import { HeaderService } from './HeaderHome/HeaderService/HeaderService';

import { HeaderSobre } from './HeaderHome/HeaderSobre/HeaderPortfoil';
import { HeaderContact } from './HeaderHome/HeaderContact/HeaderContact';

export const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <HeaderPortfoil />
        <HeaderService />
        <TitleHome />
        <HeaderSobre />
        <HeaderContact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
