import { useState } from 'react';
import { Formik } from 'formik';
import { TfiSearch } from 'react-icons/tfi';
import { toast, ToastContainer, Slide } from 'react-toastify';
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
    if (!inputQuery) {
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
      <ToastContainer transition={Slide} />
    </SearchBar>
  );
};

export default Search;

// import React, { useState } from 'react';
// import { Formik } from 'formik';
// import { TfiSearch } from 'react-icons/tfi';
// import { toast, ToastContainer, Slide } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
//   SearchForm,
//   SearchFormInput,
//   SearchFormButton,
//   SearchFormButtonLabel,
//   SearchBar,
// } from '../../pages/Movies/Movies.styled.jsx';

// const notifyOptions = {
//   position: 'top-center',
//   autoClose: 1500,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   theme: 'colored',
// };

// const Search = ({ updateQueryString }) => {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = event => {
//     setInputValue(event.currentTarget.value.toLowerCase().trim());
//   };

//   const handleSubmit = () => {
//     if (!inputValue) {
//       return toast.info('Please enter keywords for search', notifyOptions);
//     }
//     updateQueryString(inputValue);
//     clearForm();
//   };

//   const clearForm = () => {
//     setInputValue('');
//   };

//   return (
//     <>
//       <SearchBar>
//         <Formik initialValues={{ inputQuery: '' }} onSubmit={handleSubmit}>
//           <SearchForm autoComplete="off">
//             <SearchFormButton type="submit">
//               <TfiSearch size="25" />
//               <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//             </SearchFormButton>
//             <SearchFormInput
//               type="text"
//               name="inputQuery"
//               placeholder="Search your movie!"
//               value={inputValue}
//               onChange={handleChange}
//             />
//           </SearchForm>
//         </Formik>
//       </SearchBar>
//       <ToastContainer transition={Slide} />
//     </>
//   );
// };

// export default Search;
