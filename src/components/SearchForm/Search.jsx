import { useState } from 'react';
import { Formik } from 'formik';
import { TfiSearch } from 'react-icons/tfi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchBar,
} from '../../pages/Movies/Movies.styled.jsx';

const notifyOptions = {
  position: 'top-center',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
};

const Search = ({ updateQueryString }) => {
  const [inputQuery, setInputQuery] = useState('');

  const handleSubmit = () => {
    if (inputQuery.trim() === '') {
      return toast.info('Please enter a search query', notifyOptions);
    }
    updateQueryString(inputQuery);
    setInputQuery('');
  };
  return (
    <SearchBar>
      <Formik initialValues={{ inputQuery: '' }} onSubmit={handleSubmit}>
        <SearchForm autoComplete="off">
          <SearchFormButton type="submit">
            <TfiSearch size="25" />
            <SearchFormButtonLabel></SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="inputQuery"
            placeholder="Search your movie!"
            value={inputQuery}
            onChange={e => setInputQuery(e.target.value)}
          />
        </SearchForm>
      </Formik>
    </SearchBar>
  );
};

export default Search;
