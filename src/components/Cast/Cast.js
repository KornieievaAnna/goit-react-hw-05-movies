import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCredits } from 'service/api';
import ImageNotFound from './ImageNotFound.png';

const Cast = () => {
  const [casts, setCasts] = useState('');
    const { id } = useParams();
    const ImageUrl = '//image.tmdb.org/t/p/w500';

  console.log(id);

  useEffect(() => {
    const castSearch = async () => {
      if (id) {
        try {
          console.log('working');
            const casts = await getCredits(id);
            console.log(casts);
          setCasts(casts);
        } catch (error) {
          console.log('error');
        } finally {
          // setLoading(false);
        }
      }
      return;
    };
    castSearch();
  }, [id]);

    return (
      <>
        {casts.length > 0 && (
          <ul>
            {casts.map(({ id, character, name, profile_path }) => (
              <li key={id}>
                {profile_path ? (
                  <img src={ImageUrl + profile_path} alt={name} width={280} />
                ) : (
                  <img
                    src={ImageNotFound}
                    alt="Not found"
                    width={280}
                    height={420}
                  />
                )}
                <p>{name}</p>
                <p>Character:{character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
};

export default Cast;
