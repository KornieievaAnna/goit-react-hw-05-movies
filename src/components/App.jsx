import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Routes, Route, NavLink } from 'react-router-dom';
import MovieDetails from './MovieDetails/MovieDetails';
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
        <Route path="/movie/:id" element={<MovieDetails/>} />
        {/* <Route path="*" element={<div>NotFound</div>} /> */}
        {/* <Route path="/movie/cast" element={<div>cast</div>} />
          <Route path="/movie/review" element={<div>review</div>}/> */}
      </Routes>
    </div>
  );
};
