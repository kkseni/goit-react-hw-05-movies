import { Link, useLocation } from 'react-router-dom';
import {
  ContainerList,
  MovieListUl,
  MovieCardItem,
  MovieTitle,
  MovieImage,
} from './MovieList.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const errorImage =
  'https://img.freepik.com/premium-vector/modern-mini…page-not-found-with-concept_599740-716.jpg?w=200';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ContainerList>
      <MovieListUl>
        {movies.map(({ id, title, backdrop_path }) => {
          const image = backdrop_path
            ? `${BASE_URL}${backdrop_path}`
            : errorImage;
          return (
            <MovieCardItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <MovieImage src={image} alt={title} />
                <MovieTitle>{title}</MovieTitle>
              </Link>
            </MovieCardItem>
          );
        })}
      </MovieListUl>
    </ContainerList>
  );
};

export default MovieList;
