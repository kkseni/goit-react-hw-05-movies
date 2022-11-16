import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { FormMovies, InputMovies, ButtonInputMovies } from './Form.styled';

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  // Запис значення в "Інпут"
  const handleInput = e => {
    const newQuery = e.target.value.toLowerCase().trim();
    setQuery(newQuery);
  };

  // Ориманння значення при "Сабміті"
  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      alert('Ведіт щось в пошук.');
      return;
    }
    // "Пропси" з "Movies"
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <FormMovies onSubmit={handleSubmit}>
        <InputMovies
          type="text"
          onChange={handleInput}
          value={query}
          autoComplete="off"
          placeholder="Search movies 😎"
        ></InputMovies>
        <ButtonInputMovies type="submit">
          <FiSearch size="16px" />
        </ButtonInputMovies>
      </FormMovies>
    </>
  );
};

export default Form;
