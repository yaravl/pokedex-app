import React from 'react';
import { Link } from 'react-router-dom';

import logo from '@assets/img/pokemon_logo.png';
import { ROUTES } from '@utils/constants';

import styles from './Header.module.css';

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.header_container}>
      <div className={styles.header_left}>
        <img className={styles.header_logo} src={logo} alt='logo' />
        <div className={styles.header_quote}>Gotta Catch Em All!</div>
      </div>

      <div className={styles.header_navigation}>
        <p>Github</p>
        <Link to={ROUTES.PROFILE}>Profile</Link>
        <p>Theme</p>
      </div>
    </div>
  </header>
);
