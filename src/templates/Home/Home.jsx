import React from 'react';
import { TitleHome } from './TitleHome/TitleHome';
import { Footer } from '../../Components/Footer/Footer';

import './Home.css';

export const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <TitleHome />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
