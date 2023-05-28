import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import theme from '../Styles/theme';
import { SharedLayout } from './SharedLayout/SharedLayout';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

const Home = lazy(() => import('../pages/HomePage/Home.jsx'));
const Movies = lazy(() => import('../pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails.jsx')
);
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));
const Trailer = lazy(() => import('./Trailer/Trailer.jsx'));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="trailer" element={<Trailer />} />
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
