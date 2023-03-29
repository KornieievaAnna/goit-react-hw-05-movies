import { useState, useEffect, useRef } from 'react';
import { getTrending } from 'service/api';
import Notiflix from 'notiflix';

import MovieGalleryItem from '../components/MovieGalleryItem/MovieGalleryItem';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    setLoading(true);
    movieTrending();
  }, []);

  const movieTrending = async () => {
    try {
      const movie = await getTrending();
      console.log(movie.length);
      setMovies(movie);
    } catch (error) {
      console.log('error');
    } finally {
      setLoading(false);
      isFirstRender.current = false;
    }
  };
  console.log(movies);

  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>{title ?? name}</li>
      ))}
    </ul>
  );
};

export default Home;
