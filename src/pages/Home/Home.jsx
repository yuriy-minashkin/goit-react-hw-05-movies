import { MoviesList } from '../../components/MoviesList/MoviesList';
import { getTrendyMovies } from 'Services/API';
import { useState, useEffect } from 'react';
import css from './Home.module.css';

const Home = () => {
  const [trendyMovies, setTrendyMovies] = useState([]);

  useEffect(() => {
    getTrendyMovies().then(result => {
      if (result) {
        setTrendyMovies(result);
      }
    });
  }, []);

  return (
    <main className={css.container}>
      <h2 className={css.title}>Trending today</h2>
      <MoviesList movies={trendyMovies} />
    </main>
  );
}

export default Home;