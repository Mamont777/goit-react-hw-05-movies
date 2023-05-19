import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/HomePage/Home.jsx'));
const Movies = lazy(() => import('../pages/Movies/Movies.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<div>MoviesDetailPage</div>} />
      </Route>
    </Routes>
  );
};
