import styled from 'styled-components';

export const ScrollUpBtn = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 30px;
  bottom: 20px;
  border: 2px solid #dc569f;
  border-radius: 50%;
  z-index: 50;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background: linear-gradient(
    141.22deg,
    rgb(255, 194, 38) 9.4%,
    rgb(248, 65, 25) 91.91%
  );
  scale: 1;
  &:hover {
    box-shadow: 0px 0px 15px 5px #dc5698cc;
    scale: 1.2;
  }
`;

