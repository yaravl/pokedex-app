import classNames from 'classnames';
import React from 'react';

import { useRequestPokemonFormQuery, useRequestPokemonQueries } from '@utils/api';

import styles from './PokedexPage.module.css';

export const PokedexPage = ({ id = 1 }) => {
  const [offset, setOffset] = React.useState(1);
  const [selectedPokemonId, setSelectedPokemonId] = React.useState(id);
  const results = useRequestPokemonQueries({ offset });

  const isLoading = results.some((el) => el.isLoading);

  const { data } = useRequestPokemonFormQuery({
    id: selectedPokemonId,
    config: { enabled: !isLoading, cacheTime: 20000 }
  });

  if (isLoading) return <h1>Loading</h1>;
  console.log(data);

  const pokemons = results.map((result) => result!.data);

  const selectedPokemon = pokemons.find((pokemon) => pokemon?.id === selectedPokemonId)!;

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.card_title}>
            <div className={styles.card_title_name}>{selectedPokemon.name}</div>
            <div>#00{selectedPokemon.id}</div>
          </div>
          <div className={styles.card_types}>
            {selectedPokemon.types.map(({ type }) => (
              <div key={type.name} className={styles.card_types_type}>
                {type.name}
              </div>
            ))}
          </div>
          <div>
            <img
              className={styles.card_image}
              src={selectedPokemon.sprites.other['official-artwork'].front_default!}
              alt=''
            />
          </div>
          <div className={styles.card_info}>
            <div>
              <div className={styles.card_info_title}>Stats</div>
              <ul>
                {selectedPokemon.stats.map((stat) => (
                  <li key={stat.stat.name} className={styles.card_info_item}>
                    {stat.stat.name}:{stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className={styles.card_info_title}>Abilities</div>
              <ul>
                {selectedPokemon.abilities.map(({ ability }) => (
                  <li key={ability.name} className={styles.card_info_item}>
                    {ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ul>
          {pokemons.map((pokemon) => {
            if (!pokemon) return;
            const isActive = selectedPokemonId === pokemon.id;
            return (
              <li
                role='option'
                aria-selected={isActive}
                tabIndex={0}
                className={classNames(styles.pokemon_item, {
                  [styles.pokemon_item_active]: isActive
                })}
                key={pokemon?.id}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setSelectedPokemonId(pokemon?.id);
                }}
                onClick={() => setSelectedPokemonId(pokemon.id)}
              >
                <img
                  className={styles.pokemon_item_image}
                  src={pokemon.sprites.front_default!}
                  alt=''
                />
                {pokemon.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
