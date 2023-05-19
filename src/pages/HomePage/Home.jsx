import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTrendingMovies } from 'services/themoviedbAPI';
import MovieList from '../../components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const page = Number(params.page || 1);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const data = await getTrendingMovies(page);
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchTrending();
    setSearchParams({ page });
  }, [page, setSearchParams]);

  return (
    <>
      <h2 style={{ textShadow: '-6px 7px 6px rgba(34,17,153,0.47)' }}>
        Trending today
      </h2>
      <MovieList movies={trendingMovies} />
    </>
  );
};

export default Home;
