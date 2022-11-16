import { getDataFromApiActorInfo } from '../../Api/movies-service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Actors from 'components/Actors';

const Cast = () => {
  const [actors, setActors] = useState([]);

  //Отримання параметрів з "URL"
  const { movieId } = useParams();

  useEffect(() => {
    const fetchActor = async () => {
      try {
        const { cast } = await getDataFromApiActorInfo(movieId);
        setActors(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchActor();
  }, [movieId]);

  return (
    <>
      {actors.length === 0 ? (
        'We don`t have any Cast for this movie'
      ) : (
        <Actors actors={actors} />
      )}
    </>
  );
};

export default Cast;
