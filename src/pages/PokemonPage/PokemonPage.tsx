import React from 'react';
import { useParams } from 'react-router-dom';

import {
  PokemonAbilities,
  PokemonEvolutionChain,
  PokemonHabitat,
  PokemonHero,
  PokemonStats
} from '@common';
import { useRequestPokemonQueryByName } from '@utils/api';

import styles from './PokemonPage.module.css';

export const PokemonPage: React.FC = () => {
  const { pokemonName } = useParams();

  const { data, isLoading, isError } = useRequestPokemonQueryByName({
    params: { name: pokemonName! }
  });

  if (isError) return <h5>Error!</h5>;
  if (isLoading) return <h5>Loading...</h5>;

  return (
    <div className='container'>
      <PokemonHero pokemon={data} />

      <PokemonEvolutionChain id={data.id} />

      <div className={styles.info}>
        <div>
          <div className={styles.info_item}>
            <PokemonStats
              title='Base Stats'
              stats={data.stats}
              colorType={data.types[0].type.name}
            />
          </div>
          <div className={styles.info_item}>
            <PokemonHabitat id={data.id} />
          </div>
        </div>
        <div>
          <div className={styles.info_item}>
            <PokemonAbilities pokemon={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
