const BASE_URL = 'https://image.tmdb.org/t/p/w200';
const errorImage =
  'https://img.freepik.com/premium-vector/modern-mini…page-not-found-with-concept_599740-716.jpg?w=200';

const Actors = ({ actors }) => {
  return (
    <div>
      <ul>
        {actors.map(({ name, id, profile_path, character }) => {
          const image = profile_path
            ? `${BASE_URL}${profile_path}`
            : errorImage;
          return (
            <li key={id}>
              <img src={image} alt={name} />
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Actors;
