import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from 'service/api';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const movieInfo = async () => {
      try {
        const movieInfo = await getMovie(id);
        setMovie(movieInfo);
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };
    movieInfo();
  }, [id, setMovie]);

  return <>{movie && <MovieCard movie={movie} />}</>;
};

export default MovieDetails;
