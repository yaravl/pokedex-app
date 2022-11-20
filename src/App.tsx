import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '@features/layout';
import { PokemonPage, PokemonsPage } from '@pages';
import { ROUTES } from '@utils/constants';

import '@assets/css/global.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
        <Route path={ROUTES.POKEMON} element={<PokemonPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
