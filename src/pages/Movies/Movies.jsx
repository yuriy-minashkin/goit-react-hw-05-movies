import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'Services/API';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('movie');

  useEffect(() => {
    if (movieQuery === null) {
      return;
    }

    getMovieByName(movieQuery).then(result => setMovies(result));
  }, [movieQuery]);
  
  return (
    <div>
      <SearchBar onSearchSubmit={query => setSearchParams({ movie: query })} />
      {movies !== null &&
        (movies.length > 0 ? (
          <MoviesList movies={movies} />
        ) : (
          <h2 className={css.nothingFound}>
            Ooops... there is no any movie macthing your search parameters.
          </h2>
        ))}
    </div>
  );
};

export default Movies;