import { useState, useEffect } from 'react';
import { getDataFromApiMovieDetails } from '../../Api/movies-service';
import { useParams } from 'react-router-dom';
import CardMovie from 'components/CardMovie';

const MovieDetails = () => {
  const [details, setDetails] = useState({});

  //Отримання параметрів з "URL"
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const detailsMovie = await getDataFromApiMovieDetails(movieId);
        setDetails(detailsMovie);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDetails();
  }, [movieId]);

  // Деструктуризація
  const { id, poster_path, original_title, vote_average, overview, genres } =
    details;

  return (
    <div>
      <CardMovie
        id={id}
        poster_path={poster_path}
        original_title={original_title}
        vote_average={vote_average}
        overview={overview}
        genres={genres}
      />
    </div>
  );
};

export default MovieDetails;
