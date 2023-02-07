import { useState, useEffect } from 'react';
import { getMovieCast } from 'Services/API';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import defaultPhoto from 'images/defaultPhoto.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMovieCast(movieId);
      setCast(result);
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(({ name, character, profilePhoto }) => {
            return (
              <li className={css.item} key={name}>
                <img
                  className={css.image}
                  src={profilePhoto || defaultPhoto}
                  alt={name}
                />
                <div className={css.description}>
                  <p className={css.text}>Actor: {name}</p>
                  <p className={css.text}>Character: {character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2 className={css.notFound}>No actors found</h2>
      )}
    </>
  );
};

export default Cast;
