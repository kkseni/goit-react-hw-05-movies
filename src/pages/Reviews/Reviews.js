import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDataFromApiReviews } from '../../Api/movies-service';
import Feedback from 'components/Feedback';

const Reviews = () => {
  const [reviews, setSReviews] = useState([]);

  //Отримання параметрів з "URL"
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await getDataFromApiReviews(movieId);
        setSReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        'We don`t have any Reviews for this movie'
      ) : (
        <Feedback reviews={reviews} />
      )}
    </>
  );
};

export default Reviews;
