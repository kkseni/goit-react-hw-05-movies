import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CardButtonBack, CardMovieContainer } from './CardMovie.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';
const errorImage =
  'https://img.freepik.com/premium-vector/modern-mini…page-not-found-with-concept_599740-716.jpg?w=200';

const CardMovie = ({
  id,
  poster_path,
  original_title,
  vote_average,
  overview,
  genres = [],
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const image = poster_path ? `${BASE_URL}${poster_path}` : errorImage;

  return (
    <CardMovieContainer key={id}>
      <CardButtonBack
        type="button"
        onClick={() => {
          navigate(location?.state?.from?.pathname ?? '/');
        }}
      >
        Go Back
      </CardButtonBack>
      <img src={image} alt={original_title} />
      <h1>{original_title}</h1>
      <p>User Score: {Math.round(vote_average) * 10}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{genres.map(el => el.name).join(', ')}.</p>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </CardMovieContainer>
  );
};

export default CardMovie;
