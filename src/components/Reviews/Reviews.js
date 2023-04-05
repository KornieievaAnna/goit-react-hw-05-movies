import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'service/api';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const castSearch = async () => {
      if (id) {
        try {
          const reviews = await getReviews(id);
          setReviews(reviews);
        } catch (error) {
          console.log('error');
        } finally {
        }
      }
      return;
    };
    castSearch();
  }, [id]);

  return (
    <>
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
