import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <h1>404</h1>
      <p>Sorry, page not found...</p>
      <Link to="/">Home</Link>
    </>
  );
};

export default PageNotFound;
