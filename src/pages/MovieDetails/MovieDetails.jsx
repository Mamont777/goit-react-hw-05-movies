import { useState, useRef, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet, Link } from 'react-router-dom';
import { Rating } from '@mui/material';

import { getMovieById } from '../../services/themoviedbAPI.js';
import {
  BackLink,
  MovieInfo,
  MoviePoster,
  MovieDescription,
  MovieDescriptionItem,
  Genres,
  Genre,
  RatingWrapper,
  Border,
  AdditionalInfo,
  AdditionalList,
  AdditionalItem,
} from './MovieDetails.styled';
import Loader from '../../components/Loader/Loader';
import {
  getClassByRate,
  getReleaseYear,
  formatReleaseDate,
  formatRuntime,
} from '../../helpers/Helpers';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTarget, setActiveTarget] = useState('');
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function fetchInfo() {
      try {
        const data = await getMovieById(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchInfo();
  }, [movieId]);

  const {
    genres,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
    status,
    runtime,
  } = movieDetails;

  const ratingClass = getClassByRate(vote_average);
  const releaseYear = getReleaseYear(release_date);
  const formattedReleaseDate = formatReleaseDate(release_date);
  const formattedRuntime = formatRuntime(runtime);
  const showHide = target => {
    if (isVisible && target === activeTarget) {
      setIsVisible(false);
      setActiveTarget('');
    } else {
      setIsVisible(true);
      setActiveTarget(target);
    }
  };

  return (
    <>
      <BackLink to={backLinkRef.current}>Back</BackLink>
      <MovieInfo>
        <MoviePoster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://dummyimage.com/395x574/000/fff.jpg&text=no+poster'
          }
          alt={`Poster ${title}`}
          width="100%"
        />
        {(vote_average || vote_average > 0) && (
          <RatingWrapper className={ratingClass}>
            {vote_average?.toFixed(1)}
          </RatingWrapper>
        )}
        <MovieDescription>
          <ul>
            <MovieDescriptionItem>
              <h2>
                {title} ({releaseYear})
              </h2>
              {(vote_average || vote_average > 0) && (
                <Rating
                  name="read-only"
                  defaultValue={(vote_average / 10) * 5}
                  precision={0.5}
                  size="large"
                  readOnly
                ></Rating>
              )}
              {genres && (
                <Genres>
                  {genres.map((genre, index) => (
                    <Genre key={index}>{genre.name}</Genre>
                  ))}{' '}
                </Genres>
              )}
            </MovieDescriptionItem>
            <MovieDescriptionItem>
              <h3>Overview</h3>
              <p>{overview}</p>
            </MovieDescriptionItem>
            <li>
              <b style={{ color: 'rgb(255, 66, 8)', fontWeight: 700 }}>
                Status:{' '}
              </b>
              {status}
            </li>
            <li>
              <b style={{ color: 'rgb(255, 66, 8)', fontWeight: 700 }}>
                Release Date:{' '}
              </b>
              {formattedReleaseDate}
            </li>
            <li>
              <b style={{ color: 'rgb(255, 66, 8)', fontWeight: 700 }}>
                Runtime:{' '}
              </b>
              {formattedRuntime}
            </li>
          </ul>
        </MovieDescription>
      </MovieInfo>
      <Border />
      <AdditionalInfo>
        <h4 style={{ textShadow: '-6px 7px 6px rgba(34,17,153,0.47)' }}>
          Additional Information
        </h4>
        <AdditionalList>
          <AdditionalItem onClick={() => showHide('cast')}>
            <Link to="cast">Cast</Link>
          </AdditionalItem>
          <AdditionalItem onClick={() => showHide('reviews')}>
            <Link to="reviews">Reviews</Link>
          </AdditionalItem>
          <AdditionalItem onClick={() => showHide('trailer')}>
            <Link to="trailer">Trailer</Link>
          </AdditionalItem>
        </AdditionalList>
      </AdditionalInfo>
      <Border />
      <Suspense fallback={<Loader />}>
        <Outlet context={[isVisible]} />
      </Suspense>
    </>
  );
};

export default MovieDetails;
