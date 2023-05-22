import styled from 'styled-components';
import { Field, Form } from 'formik';

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 300px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 9px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const SearchFormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 40px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 0 1rem;
  padding-left: 2.5rem;
  background: linear-gradient(
    180deg,
    rgb(56 56 56 / 64%) 0%,
    rgb(36 36 36 / 94%) 66%,
    rgb(41 41 41 / 83%) 100%
  );
  transition: 0.3s ease;
  border: 2px solid;
  border-image: conic-gradient(#00f260, #0575e6, #64f38c) 1;
  color: whitesmoke;

  ::placeholder {
    font: inherit;
    font-size: 18px;
    color: #fff;
  }
  :focus::placeholder {
    color: #999;
  }
`;

export const SearchFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 40px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    180deg,
    rgb(56 56 56 / 64%) 0%,
    rgb(36 36 36 / 94%) 66%,
    rgb(41 41 41 / 83%) 100%
  );
  border: 2px solid;
  border-image: conic-gradient(#00f260, #0575e6, #64f38c) 1;
  border-radius: 9px;

  :hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
