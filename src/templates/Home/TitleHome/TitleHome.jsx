import './TitleHome.css';

import logo from '../../../assets/Logo G5 1500x1500 original color.png';

export const TitleHome = () => {
  return (
    <div>
      <img src={logo} className="img-logo-title" />
      <div className="div-intro">
        <h1>Gear-5 Desenvolvimento</h1>
        <h3>A Quinta Marcha do seu negócio</h3>
      </div>
    </div>
  );
};
