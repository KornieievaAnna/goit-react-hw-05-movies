import { Link } from 'react-router-dom';

export default function ImageGalleryItem({ movies }) {
  console.log(movies);
  return (
    <>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title ?? name}</Link>
        </li>
      ))}
    </>
  );
}
