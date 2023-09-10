import './TitleHome.css';
import './h3-sub-title.css';
import './logo.css';

import logo from '../../../assets/Logo G5 1500x1500 original color.png';

export const TitleHome = () => {
  return (
    <div>
      <div className="div-intro">
        <h1 className="text-focus-in">Gear-5 Desenvolvimento</h1>
      </div>
      <img src={logo} className="img-logo-title scale-up-center" />
      <div className="div-intro">
        <h2 className="h3-sub-title">A Quinta Marcha do seu negócio</h2>
        <h2 className="h3-sub-title"></h2>
      </div>
    </div>
  );
};
