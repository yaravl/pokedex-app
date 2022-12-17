import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '@features/layout';
import { AuthPage, PokemonPage, PokemonsPage } from '@pages';
import { ROUTES } from '@utils/constants';
import { useStore } from '@utils/contexts';

import '@assets/css/global.css';

export const Auth = () => (
  <Routes>
    <Route path={ROUTES.AUTH} element={<AuthPage />} />
    <Route path='*' element={<Navigate to={ROUTES.AUTH} />} />
  </Routes>
);

const App = () => {
  const {
    sessions: { isSignIn }
  } = useStore();

  return (
    <BrowserRouter>
      {isSignIn ? (
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
            <Route path={ROUTES.POKEMON} element={<PokemonPage />} />
            <Route path='*' element={<h1>404!</h1>} />
          </Route>
        </Routes>
      ) : (
        <Auth />
      )}
    </BrowserRouter>
  );
};

export default App;
