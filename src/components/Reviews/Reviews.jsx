import { useState, useEffect } from 'react';
import { getMovieReviews } from 'Services/API';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMovieReviews(movieId);
      setReviews(result);
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li className={css.item} key={id}>
                <h3 className={css.title}>{author}</h3>
                <p className={css.text}>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2 className={css.notFound}>No any review yet.</h2>
      )}
    </>
  );
};

export default Reviews;