import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'service/api';
import { Text } from '../Cast/Cast.styled';

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
    <section>
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <Text>{content}</Text>
            </li>
          ))}
        </ul>
      ) : (
        <Text>We don`t have any reviews for this film 😭</Text>
      )}
    </section>
  );
};

export default Reviews;
