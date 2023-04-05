import { useLocation, NavLink } from 'react-router-dom';
import { Card} from './MovieGallery.styled';

export default function MovieGallery({ movie }) {
  const location = useLocation();
  const { id, name, title, poster_path } = movie;
  const ImageUrl = '//image.tmdb.org/t/p/w500';
  return (
    <Card key={id}>
      <NavLink to={`/movie/${id}`} state={{ from: location }}>
        <img src={ImageUrl + poster_path} alt={title} width={280} />
        <h3>{title ?? name}</h3>
      </NavLink>
    </Card>
  );
}
