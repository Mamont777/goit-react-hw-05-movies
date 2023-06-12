import styled from 'styled-components';
export const MovieListStyled = styled.ul`
  margin: 15px 0 60px 0;

  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const MovieItem = styled.li`
  max-width: 100%;
  height: 100%;
  width: 260px;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  backdrop-filter: blur(3.5px);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  transform: scale(1);
  transition: transform 250ms linear 0s;
  &:hover {
    box-shadow: rgb(219 22 172 / 89%) 0px 2px 24px -5px;
    transform: scale(1.05);
  }
  img {
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  min-height: 100%;
  height: 420px;
  border-radius: 8px;

  transform: scale(1);
  object-fit: cover;
  object-position: center center;
`;

export const MovieTitle = styled.p`
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  :hover {
    color: orangered;
  }
`;
