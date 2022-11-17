import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from '../../utils/Loader';
import Header from 'components/Header';

// import Home from 'components/pages/Home';
// import Movies from 'components/pages/Movies';
// import MovieDetails from 'components/pages/MovieDetails';
// import Cast from 'components/pages/Cast';
// import Reviews from 'components/pages/Reviews';
// import NotFound from 'components/pages/NotFound';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../../pages/Cast'));
const Reviews = lazy(() => import('../../pages/Reviews'));
const NotFound = lazy(() => import('../../pages/NotFound'));

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
