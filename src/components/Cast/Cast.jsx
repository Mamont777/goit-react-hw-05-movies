import { useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMoviesCast } from '../../services/themoviedbAPI.js';
import { CastList, CastItem, CastDesc } from './Cast.styled';
import Loader from '../Loader/Loader';
import noImage from '../../images/no-image-icon-23505.png';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible] = useOutletContext();

  useEffect(() => {
    async function fetchCast() {
      try {
        setIsLoading(true);
        const data = await getMoviesCast(movieId);
        setMovieCast(data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {isVisible && (
        <CastList>
          {movieCast.length > 0 &&
            movieCast.map(({ id, name, character, profile_path }) => (
              <CastItem key={id}>
                <div>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={`Poster ${name}`}
                      width="280"
                      height="420"
                    />
                  ) : (
                    <img
                      src={noImage}
                      alt={`Poster ${name}`}
                      width="280"
                      height="500"
                    />
                  )}
                </div>
                <CastDesc>{name}</CastDesc>
                <CastDesc>Character: {character}</CastDesc>
              </CastItem>
            ))}
          {movieCast.length === 0 &&
            !isLoading &&
            toast.warning(
              "We don't have any information about cast for this movies."
            )}
        </CastList>
      )}
      <ToastContainer transition={Slide} />
    </>
  );
};

export default Cast;
