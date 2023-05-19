import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchBar,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  SearchFormButtonLabel,
} from './Movies.styled';
import { getMovieByName } from '../../services/themoviedbAPI.js';
import MovieList from '../../components/MovieList/MovieList';
import { TfiSearch } from 'react-icons/tfi';

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
  console.log(foundFilms);

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    query: '',
  });
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const page = Number(params.page || 1);
  let { query } = params;

  useEffect(() => {
    if (!page) return;

    async function fetchMovies() {
      try {
        const data = await getMovieByName(page, query);
        setFoundFilms(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovies();
    setSearchParams({ page, query });
  }, [page, query, setSearchParams]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBar>
        <Formik
          initialValues={{ inputQuery: '' }}
          onSubmit={(values, actions) => {
            const { inputQuery } = values;
            const { resetForm } = actions;

            if (inputQuery.trim() === '') {
              return toast.info('Please enter search query ', notifyOptions);
            }
            updateQueryString(inputQuery);
            resetForm();
          }}
        >
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
      {foundFilms.length > 0 && <MovieList movies={foundFilms} />}
      <ToastContainer transition={Slide} />
    </>
  );
};

export default Movies;
