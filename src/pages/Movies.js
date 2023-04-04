import { useState, useEffect } from 'react';
import { getSearch } from 'service/api';
import Notiflix from 'notiflix';
import { useSearchParams } from 'react-router-dom';
import MovieGallery from '../components/MovieGallery/MovieGallery';

// import { AiOutlineSearch } from 'react-icons/ai';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const searchTitle = searchParams.get('query');

  useEffect(() => {
    setLoading(true);
    const movieTrending = async () => {
      if (!searchTitle) {
        return;
      }
      try {
        const movie = await getSearch(searchTitle);

        setMovies(movie);
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };
    movieTrending();
  }, [searchTitle]);

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      Notiflix.Notify.failure(`Please enter a name`);
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  const onSubmit = name => {
    if (searchTitle === name) {
      Notiflix.Notify.info(
        `Your request "${name}" has already been completed! :-)`
      );
      return;
    }
    setQuery(name);
    setSearchParams({ query: query });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleNameChange}
        />
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <MovieGallery key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
