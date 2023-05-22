import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
import { getMovieVideo } from '../../services/themoviedbAPI.js';

const Trailer = () => {
  const { movieId } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchTrailer() {
      try {
        const data = await getMovieVideo(movieId);
        const trailer = data.results.filter(item => item.type === 'Trailer')[0];

        if (trailer) {
          setTrailerUrl(trailer.key);
        }

        setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrailer();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {trailerUrl !== '' && (
        <iframe
          title="Movie Trailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerUrl}`}
          allowFullScreen
        ></iframe>
      )}
      {trailerUrl === '' &&
        !isLoading &&
        toast.warning("Sorry, we don't have any trailer for this movie.")}
      <ToastContainer transition={Slide} />
    </>
  );
};

export default Trailer;
