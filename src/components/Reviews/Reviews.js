import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'service/api';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const castSearch = async () => {
      if (id) {
        try {
          const reviews = await getReviews(id);
          setReviews(reviews);
        } catch (error) {
          console.log('error');
        } finally {
          setLoading(false);
        }
      }
      return;
    };
    castSearch();
  }, [id]);

  return (
    <>
      {/* {loading && <Loader />} */}
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this film</p>
      )}
    </>
  );
};

export default Reviews;
