import { NavLink } from 'react-router-dom';

export default function MovieGallery({ movie }) {
  const { id, name, title } = movie;
  return (
    <li key={id}>
      <NavLink to={`/movie/${id}`}>{title ?? name}</NavLink>
    </li>
  );
}
