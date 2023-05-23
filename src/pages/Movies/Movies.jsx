//
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from '../../services/themoviedbAPI.js';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import Search from '../../components/SearchForm/Search.jsx';

const Movies = () => {
  const [foundFilms, setFoundFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await getMovieByName(searchQuery);
        setFoundFilms(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [searchQuery]);

  const updateQueryString = query => {
    setSearchParams({ query });
  };

  return (
    <>
      {isLoading && <Loader />}
      <Search updateQueryString={updateQueryString} />
      {foundFilms.length > 0 && <MovieList movies={foundFilms} />}
    </>
  );
};

export default Movies;
