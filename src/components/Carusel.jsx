import React from 'react';
import '../assets/styles/components/Carusel.scss';

const Carusel = ({ children }) => (
  <section className='carusel'>
    <div className='carusel__contenedor'>
      {children}
    </div>
  </section>
);

export default Carusel;
