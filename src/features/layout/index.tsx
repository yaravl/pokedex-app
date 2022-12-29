import { Outlet } from 'react-router-dom';

import { Header } from './Header/Header';
import {Navigation} from "@features/layout/Navigation/Navigation";

export const Layout = () => (
  <>
    <Header />
    <Navigation />
    <main className='px-3.5 pt-8 pb-20 lg:px-6 lg:py-10 lg:col-start-3'>
      <Outlet />
    </main>
  </>
);
