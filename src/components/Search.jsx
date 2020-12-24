import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='buscador'>
    <h2 className='buscador__titulo'>A ver, ¿Que quieres ver hoy?</h2>
    <input className='input' type='text' placeholder='Buscar...' />
  </section>
);

export default Search;
