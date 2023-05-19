import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieListStyled,
  MovieItem,
  MoviePoster,
  MovieTitle,
} from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListStyled>
      {movies.map(({ id, title, poster_path }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MoviePoster
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://dummyimage.com/395x574/000/fff.jpg&text=no+poster'
              }
              alt={`Poster${title}`}
            />
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </MovieItem>
      ))}
    </MovieListStyled>
  );
};
export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
