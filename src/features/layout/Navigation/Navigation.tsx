import React from 'react';
import styles from './Navigation.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "@utils/constants";

import {HiOutlineViewGrid} from 'react-icons/hi'
import {HiOutlineArchiveBox, HiOutlineInformationCircle} from 'react-icons/hi2'
import {MdOutlineCatchingPokemon, MdOutlineCompareArrows} from 'react-icons/md'

export const Navigation = () =>  (
    <nav className={styles.nav}>
      <ul className={styles.nav_container}>
        <li>
          <Link to={ROUTES.POKEMONS}><HiOutlineViewGrid/>Pokemons</Link>
        </li>
        <li>
          <Link to='/pokemon/1'><MdOutlineCatchingPokemon/>Pokemon #1</Link>
        </li>
        <li>
          <Link to='/compare'><MdOutlineCompareArrows/>Compare</Link>
        </li>
        <li>
          <Link to='/my-pokemons'><HiOutlineArchiveBox/>My Pokemons</Link>
        </li>
        <li>
          <Link to='/about'><HiOutlineInformationCircle/>About</Link>
        </li>
      </ul>
    </nav>
  );
