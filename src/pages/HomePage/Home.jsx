import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/themoviedbAPI';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';
import ScrollUp from '../../components/ScrollUp/ScrollUp';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTrending(currentPage) {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies(currentPage);
        setTrendingMovies(prevMovies => [...prevMovies, ...data.results]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrending(currentPage);
  }, [currentPage]);

  const handleLoadMore = () => setCurrentPage(prevPage => prevPage + 1);

  return (
    <>
      {isLoading && <Loader />}
      <h2 style={{ textShadow: '-6px 7px 6px rgba(34,17,153,0.47)' }}>
        Trending today
      </h2>
      <MovieList movies={trendingMovies} />
      {!isLoading && <Button onLoadMore={handleLoadMore} />}
      <ScrollUp />
    </>
  );
};

export default Home;
