import React from 'react';
import { TitleHome } from './TitleHome/TitleHome';
import { Footer } from '../../Components/Footer/Footer';

import './Home.css';
import { HeaderHomePoritfoil } from './HeaderHome/HeaderHomePoritfoil';
import { HeaderHomeContact } from './HeaderHome/HeaderHomeContact';

export const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <HeaderHomePoritfoil />
        <TitleHome />
        <HeaderHomeContact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
