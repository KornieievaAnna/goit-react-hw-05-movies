import { Link, Outlet } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genres } = movie;
  const ImageUrl = '//image.tmdb.org/t/p/w500';

  return (
    <div>
      <button>go back</button>
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
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Rreviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieCard;
