import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Routes, Route, NavLink } from 'react-router-dom';
import Cast from './Cast/Cast';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';
// import Notiflix from 'notiflix';
// import { getTrending } from 'service/api';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movie">Movie</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="review" element={<Reviews/>} />
        </Route>
        <Route path="*" element={<div>NotFound</div>} /> 
      </Routes>
    </div>
  );
};
