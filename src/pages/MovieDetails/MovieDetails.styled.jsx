import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 16px;
  padding: 8px 16px;
  width: 100px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(
    141.22deg,
    rgb(255, 194, 38) 9.4%,
    rgb(248, 65, 25) 91.91%
  );
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transform: scale(1);

  :hover {
    transform: scale(0.9);
  }
`;
export const MovieInfo = styled.div`
  display: flex;
  align-items: start;
  margin-top: 10px;
`;

export const MoviePoster = styled.img`
  width: 300px;
  border-radius: 8px;
`;

export const MovieDescription = styled.div`
  margin-left: 20px;
`;

export const MovieDescriptionItem = styled.li`
  margin-bottom: 15px;
`;

export const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Genre = styled.li`
  background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  color: rgb(0, 0, 0);
  text-shadow: 0 0.4px 0.4px #fff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  padding: 6px;
`;

export const RatingWrapper = styled.div`
  position: absolute;
  top: 125px;
  left: 380px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: #ffffff;
  font-size: 14px;

  &.green {
    color: green;
    border: 1px solid green;
  }

  &.orange {
    border: 1px solid orange;
    color: orange;
  }

  &.red {
    border: 1px solid red;
    color: red;
  }
`;

export const Border = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid black;
`;

export const AdditionalInfo = styled.div`
  margin-top: 15px;
`;

export const AdditionalList = styled.div`
  display: flex;
  gap: 20px;
`;

export const AdditionalItem = styled.li`
  margin-top: 15px;

  :hover {
    color: orangered;
  }
`;
