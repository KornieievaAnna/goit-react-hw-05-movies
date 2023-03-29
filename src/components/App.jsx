import Home from 'pages/Home';
import { Routes, Route, NavLink } from 'react-router-dom';
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
        <Route path="/movie/:id" element={<div>movie :</div>}>
          {/* <Route path="/movie/cast" element={<div>cast</div>} />
          <Route path="/movie/review" element={<div>review</div>}/> */}
        </Route>
        <Route path="/movie" element={<div>On movie</div>} />
      </Routes>
    </div>
  );
};
