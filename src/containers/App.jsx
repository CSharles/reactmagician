import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carusel from '../components/Carusel';
import CaruselItem from '../components/CaruselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  },
  []);

  console.log(videos);
  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories title='Mi lista'>
        <Carusel>
          <CaruselItem />
          <CaruselItem />
          <CaruselItem />
          <CaruselItem />
        </Carusel>
      </Categories>

      <Categories title='Tendencias'>
        <Carusel>
          <CaruselItem />
          <CaruselItem />
        </Carusel>
      </Categories>

      <Categories title='Originales de platzi Video'>
        <Carusel>
          <CaruselItem />

        </Carusel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
