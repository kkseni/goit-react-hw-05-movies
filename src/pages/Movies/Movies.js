import { useState, useEffect } from 'react';
import Form from 'components/Form';
import { getDataFromApiSearchByName } from '../../Api/movies-service';
import SearchList from 'components/SearchList';
import ErrorImage from '../../utils/ErrorImage';

const Movies = () => {
  const [value, setValue] = useState('');
  const [resultsSearch, setResultsSearch] = useState([]);

  // Отримання данних з "Бекенду"
  useEffect(() => {
    const fethSearch = async () => {
      if (!value) return;
      try {
        const { results } = await getDataFromApiSearchByName(value);
        setResultsSearch(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fethSearch(value);
  }, [value]);

  // Отримання значення з "Інпуту"
  const onSubmit = query => {
    setValue(query);
  };

  return (
    <div>
      <Form onSubmit={onSubmit} />
      {resultsSearch.length === 0 && value !== '' ? (
        <ErrorImage />
      ) : (
        <SearchList resultsSearch={resultsSearch} />
      )}
    </div>
  );
};

export default Movies;
