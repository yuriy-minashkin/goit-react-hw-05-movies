import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value.toLowerCase().trim());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!query) {
      return;
    }
    onSearchSubmit(query);
    setQuery('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} type="text" value={query} onChange={handleChange} />
      <button className={css.button}>Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};