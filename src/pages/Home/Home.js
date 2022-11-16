import { useState, useEffect } from 'react';
import { getDataFromApiTrending } from '../../Api/movies-service';
import MovieList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await getDataFromApiTrending();

        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section>
      <div>
        <h2>Trending today</h2>
        <MovieList movies={movies} />
      </div>
    </section>
  );
};

export default Home;
