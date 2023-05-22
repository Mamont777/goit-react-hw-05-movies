import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMovieReviews } from '../../services/themoviedbAPI.js';
import { ReviewsList, ReviewsItem } from './Rewiews.styled';
import Loader from '../Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible] = useOutletContext();

  useEffect(() => {
    setIsLoading(true);

    async function fetchReviews() {
      try {
        const data = await getMovieReviews(movieId);
        setMovieReviews(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {isVisible && (
        <ReviewsList>
          {movieReviews.length > 0 &&
            movieReviews.map(({ id, author, content }) => (
              <ReviewsItem key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </ReviewsItem>
            ))}
          {movieReviews.length === 0 &&
            !isLoading &&
            toast.warning(" Sorry, we don't have any reviews for this movies.")}
        </ReviewsList>
      )}
      <ToastContainer transition={Slide} />
    </>
  );
};

export default Reviews;
