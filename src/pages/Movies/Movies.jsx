//
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { getMovieByName } from '../../services/themoviedbAPI.js';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import Search from '../../components/SearchForm/Search.jsx';

const notifyOptions = {
  position: 'top-center',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
};

const Movies = () => {
  const [foundFilms, setFoundFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await getMovieByName(searchQuery);
        setFoundFilms(data.results);
        if (data.results.length === 0) {
          setShowNotification(true);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
        setShowNotification(false);
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
      {foundFilms.length === 0 &&
        showNotification &&
        toast.error('No movies found with such title', notifyOptions)}
      <ToastContainer />
    </>
  );
};

export default Movies;
