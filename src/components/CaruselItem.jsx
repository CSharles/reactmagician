import React from 'react';
import '../assets/styles/components/CaruselItem.scss';
import playIcon from '../assets/static/icons8-play-64.png';
import plusIcon from '../assets/static/icons8-plus-64.png';

const CaruselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carusel-item'>
    <img className='carusel-item__img' src={cover} alt={title} />
    <div className='carusel-item__detalle'>
      <div>
        <img src={playIcon} alt='play' />
        <img src={plusIcon} alt='agregar' />
      </div>
      <p className='carusel-item__detalle--titulo'>{title}</p>
      <p className='carusel-item__detalle--subtitulo'>
        {`${year} ${contentRating} ${duration} minutos`}
      </p>
    </div>
  </div>
);

export default CaruselItem;
