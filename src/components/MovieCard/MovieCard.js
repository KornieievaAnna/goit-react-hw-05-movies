import { useLocation, Link, Outlet, NavLink } from 'react-router-dom';
import { useRef, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genres } = movie;
  const ImageUrl = '//image.tmdb.org/t/p/w500';
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movie');

  return (
    <div>
      <Link to={backLinkLocationRef.current}>
        <button>Go back</button>
      </Link>
      <div>
        <img src={ImageUrl + poster_path} alt={title} width={280} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>User Score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(ganre => ganre.name).join(', ')}</p>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="review">Rreviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieCard;
