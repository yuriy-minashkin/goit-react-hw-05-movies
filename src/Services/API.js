import axios from 'axios';

const API_KEY = '076665b0e01f9db198ffaf99145728ee';
const API_BASE = 'https://api.themoviedb.org/';

export const getTrendyMovies = async () => {
  try {
    const data = await axios.get(
      `${API_BASE}3/trending/movie/day?api_key=${API_KEY}`
    );

    const trendyMovies = data.data.results.map(
      ({ id, title, poster_path }) => ({
        id: id,
        title: title,
        poster: poster_path
          ? `https://image.tmdb.org/t/p/w300${poster_path}`
          : null,
      })
    );

    return trendyMovies;
  } catch (error) {
    alert(error);
  }
};

export const getMovieById = async movieId => {
  try {
    const data = await axios.get(
      `${API_BASE}3/movie/${movieId}?api_key=${API_KEY}`
    );

    const byIdMovieDetails = {
      title: data.data.title,
      image: data.data.poster_path
        ? `https://image.tmdb.org/t/p/w500${data.data.poster_path}`
        : null,
      score: data.data.vote_average,
      overview: data.data.overview,
      genres: data.data.genres.map(genre => genre.name).join(', '),
    };

    return byIdMovieDetails;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieCast = async movieId => {
  try {
    const data = await axios.get(
      `${API_BASE}3/movie/${movieId}/credits?api_key=${API_KEY}`
    );

    const castInfoArr = data.data.cast.map(
      ({ name, character, profile_path }) => ({
        name: name,
        character: character,
        profilePhoto: profile_path
          ? `https://image.tmdb.org/t/p/w500${profile_path}`
          : null,
      })
    );

    return castInfoArr;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieReviews = async movieId => {
  try {
    const data = await axios.get(
      `${API_BASE}3/movie/${movieId}/reviews?api_key=${API_KEY}`
    );

    const reviewsArr = data.data.results.map(({ id, author, content }) => {
      return {
        id: id,
        author: author,
        content: content,
      };
    });

    return reviewsArr;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieByName = async query => {
  try {
    const data = await axios.get(
      `${API_BASE}3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const queryResult = data.data.results.map(({ id, title, poster_path }) => ({
      id: id,
      title: title,
      poster: poster_path
        ? `https://image.tmdb.org/t/p/w300${poster_path}`
        : null,
    }));
    return queryResult;
  } catch (error) {
    console.error(error);
  }
};
