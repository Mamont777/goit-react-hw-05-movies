import styled from 'styled-components';

export const Btn = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  background: linear-gradient(
    141.22deg,
    rgb(255, 194, 38) 9.4%,
    rgb(248, 65, 25) 91.91%
  );
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto 20px;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transform: scale(1);
  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;
