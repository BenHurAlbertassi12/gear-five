import { Link } from 'react-router-dom';
import './Footer.css';

import ico from '../../assets/Logo G5 50x50 gear-5 only.png';

export const Footer = () => {
  return (
    <footer className="div-footer">
      <img src={ico} alt="G5-Desenvolvimento" />
      <p className="p-desenvolvido">©DESENVOLVIDO POR G-5</p>
      <Link className="link-termos">Termos de uso</Link>
    </footer>
  );
};
