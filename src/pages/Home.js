import { useState, useEffect } from 'react';
import { getTrending } from 'service/api';
import MovieGallery from '../components/MovieGallery/MovieGallery';

const Home = () => {
  const [, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    const movieTrending = async () => {
      try {
        const movie = await getTrending();
        setMovies(movie);
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };
    movieTrending();
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <MovieGallery key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default Home;
