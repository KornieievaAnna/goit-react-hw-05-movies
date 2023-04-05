import { useLocation, NavLink } from 'react-router-dom';

export default function MovieGallery({ movie }) {
  const location = useLocation();
  const { id, name, title } = movie;
  return (
    <li key={id}>
      <NavLink to={`/movie/${id}`} state={{ from: location }}>
        {title ?? name}
      </NavLink>
    </li>
  );
}
