import { Outlet } from 'react-router-dom';

import { Header } from './Header/Header';

export const Layout = () => (
  <>
    <Header />
    <div className='pt-32'>
      <Outlet />
    </div>
  </>
);
