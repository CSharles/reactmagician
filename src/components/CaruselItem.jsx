import React from 'react';
import '../assets/styles/components/CaruselItem.scss';
import playIcon from '../assets/static/icons8-play-64.png';
import plusIcon from '../assets/static/icons8-plus-64.png';


const CaruselItem = () => (
  <div className='carusel-item'>
    <img className='carusel-item__img' src='https://picsum.photos/300' alt='imagen aleatoria ' />
    <div className='carusel-item__detalle'>
      <div>
        <img src={playIcon} alt='play' />
        <img src={plusIcon} alt='agregar' />
      </div>
      <p className='carusel-item__detalle--titulo'>Titulo para video</p>
      <p className='carusel-item__detalle--subtitulo'>2020 16+ 114 minutos</p>
    </div>
  </div>
);

export default CaruselItem;
