import React from 'react';

import { useRequestPokemonQueries } from '../../utils/api/hooks';

import styles from './PokedexPage.module.css';

export const PokedexPage = () => {
  const [offset, setOffset] = React.useState(9);
  const results = useRequestPokemonQueries({ offset });

  const isLoading = results.some((el) => el.isLoading);
  if (isLoading) return <h1>Loading</h1>;

  const pokemons = results.map((result) => result!.data);

  console.log(pokemons);

  return (
    <div className={styles.page_container}>
      <div className={styles.content_container}>
        <div>card</div>
        <ul className={styles.list_container}>
          {pokemons.map((pokemon) => (
            <li className={styles.pokemon_item} key={pokemon.name}>
              <img
                className={styles.pokemon_item_image}
                src={pokemon.sprites.front_default}
                alt=''
              />
              {pokemon.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// TODO: 24:14
