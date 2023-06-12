import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/themoviedbAPI';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';
import ScrollUp from '../../components/ScrollUp/ScrollUp';
import { IconButton, ThemeProvider, createTheme } from '@mui/material';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const Home = () => {
  const [theme, setTheme] = useState(
    createTheme({
      palette: {
        mode: 'light',
      },
      // Rest of your theme configuration
    })
  );

  const isDarkMode = theme.palette.mode === 'dark';

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

  const containerStyles = {
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#333',
    transition: 'background-color 0.3s ease',
    minHeight: '100vh',
  };

  const toggleColorMode = () => {
    const updatedTheme = createTheme({
      ...theme,
      palette: {
        mode: isDarkMode ? 'light' : 'dark',
      },
    });
    setTheme(updatedTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={containerStyles}>
        {isLoading && <Loader />}
        <IconButton onClick={toggleColorMode} sx={{ ml: 1 }}>
          {isDarkMode ? <RiMoonLine /> : <RiSunLine />}
        </IconButton>
        <h2
          style={{
            textShadow: '-6px 7px 6px rgba(34,17,153,0.47)',
            margin: ' 6px 0 0 6px',
          }}
        >
          Trending today
        </h2>
        <MovieList movies={trendingMovies} />
        {!isLoading && <Button onLoadMore={handleLoadMore} />}
        <ScrollUp />
      </div>
    </ThemeProvider>
  );
};

export default Home;
