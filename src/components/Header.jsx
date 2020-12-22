import React from 'react';

import '../assets/styles/Header.scss';

const Header = () => (
  <header className='header'>
    <img className='header__img' src='./logo-platzi-video-BW2.png' alt='logo de la app' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='./user-icon.png' alt='imagen del usuario' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
