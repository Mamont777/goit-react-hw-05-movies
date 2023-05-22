//
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TfiSearch } from 'react-icons/tfi';
import {
  SearchBar,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  SearchFormButtonLabel,
} from './Movies.styled';
import { getMovieByName } from '../../services/themoviedbAPI.js';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

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

  const visibleMovies = foundFilms.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSearch = async (values, actions) => {
    const { inputQuery } = values;
    const { resetForm } = actions;

    if (inputQuery.trim() === '') {
      return toast.info('Please enter a search query', notifyOptions);
    }

    const data = await getMovieByName(searchQuery, inputQuery);

    setFoundFilms(data.results);

    if (data.results.length === 0) {
      toast.warning(
        "Sorry, we can't find anything for your request. Please enter another request",
        notifyOptions
      );
    }

    updateQueryString(inputQuery);
    resetForm();
  };

  return (
    <>
      {isLoading && <Loader />}
      <SearchBar>
        <Formik initialValues={{ inputQuery: '' }} onSubmit={handleSearch}>
          <SearchForm autoComplete="off">
            <SearchFormButton type="submit">
              <TfiSearch size="25" />
              <SearchFormButtonLabel></SearchFormButtonLabel>
            </SearchFormButton>
            <SearchFormInput
              type="text"
              name="inputQuery"
              placeholder="Search your movie!"
            />
          </SearchForm>
        </Formik>
      </SearchBar>
      {visibleMovies.length > 0 ? <MovieList movies={visibleMovies} /> : null}
      <ToastContainer transition={Slide} />
    </>
  );
};

export default Movies;
