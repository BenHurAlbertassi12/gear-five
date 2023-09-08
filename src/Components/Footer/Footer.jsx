import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer-total">
      <footer className="div-footer">
        <div className="div-p-creci">
          <p className="p-creci">
            <strong>CRECI 123456</strong>
          </p>
        </div>
        <hr className="hr-divisoria" />
        <div className="div-desenvolvido">
          <p className="p-desenvolvido">
            ©DESENVOLVIDO POR{' '}
            <a
              href="https://www.linkedin.com/in/benhur-albertassi/"
              target="_blank"
              rel="noreferrer"
              className="a-desenvolvimento"
            >
              BenHurAlbertassi
            </a>
            <br />
            <Link className="link-termos">Termos de uso</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};
