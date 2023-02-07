import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultMoviePic from 'images/default-movie-pic.png';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.wrapper}>
        <ul className={css.list}>
        {movies.map(({ id, title, poster }) => {
              return (
              <li className={css.item} key={id}>
                <Link className={css.link} to={`/movies/${id}`} state={{ from: location }}>
                  <img className={css.image} src={poster || defaultMoviePic} alt={title} />
                  <p className={css.title}>{title}</p>
                </Link>
              </li>)
          })}
        </ul>
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
