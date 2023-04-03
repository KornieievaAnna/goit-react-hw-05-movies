import { useState, useEffect } from 'react';

// import { AiOutlineSearch } from 'react-icons/ai';
import { getMovie } from 'service/api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovie(query);
  }, [query]);
  console.log();

  const searchMovie = async () => {
    try {
      console.log('работает');
      const movie = await getMovie(query);
      console.log(movie);
      setMovies(movie);
      console.log(movies);
    } catch (error) {
      console.log('error');
    } finally {
      //   setLoading(false);
      //   isFirstRender.current = false;
      console.log('finally');
    }
  };

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      //  Notiflix.Notify.failure(`Please enter a name`);
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  const onSubmit = name => {
    if (query === name) {
      // Notiflix.Notify.info(
      console.log(`Your request "${name}" has already been completed! :-)`);

      // );
      return;
    }
    //   setHits([]);
    setQuery(name);
    //   setPage(1);
  };
  console.log(movies);
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
      {query && (
        <ul>
          <li></li>
        </ul>
      )}
    </>
  );
};

export default Movies;
