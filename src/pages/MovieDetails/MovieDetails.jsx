import { useEffect, useState, Suspense } from 'react';
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import { getMovieById } from 'Services/API';
import defaultMoviePic from 'images/default-movie-pic.png';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  
  useEffect(() => {
    getMovieById(movieId).then(result => {
      if (result) {
        setMovie(result);
      }
    });
  }, [movieId]);
 
  return (
    <>
      {movie && (
        <>
          <Link className={css.goBackLink} to={location.state ? location.state.from : '/'}>Go back</Link>
          <div className={css.infoWrapper}>
            <img className={css.image} src={movie.image || defaultMoviePic} alt={movie.title} />
            <div className={css.descriptionWrapper}>
              <h2 className={css.title}>{movie.title}</h2>
              <div>
                <h3>Genres:</h3>
                <p>{movie.genres}</p>
              </div>
              <h3>User Score: {movie.score.toFixed(1)}</h3>
              <div>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
          <div className={css.linkWrapper}>
            <Link className={css.link} to="cast">
              Cast
            </Link>
            <Link className={css.link} to="reviews">
              Reviews
            </Link>
          </div>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetails;