import React from 'react';
import { useParams } from 'react-router-dom';

import { PokemonAbilities, PokemonHabitat, PokemonHero, PokemonStats } from '@common';
import { useRequestPokemonQuery } from '@utils/api';

import styles from './PokemonPage.module.css';

export const PokemonPage: React.FC = () => {
  const { pokemonId } = useParams();

  const { data, isLoading, isError } = useRequestPokemonQuery({
    params: { id: +(pokemonId as string) },
    options: {
      retry: 0,
      cacheTime: 60000,
      staleTime: 10000
    }
  });

  if (isError) return <h5>Error!</h5>;
  if (isLoading) return <h5>Loading...</h5>;

  console.log(data);

  return (
    <div className='container'>
      <PokemonHero pokemon={data} />
      <div className='evolution'>evolution chain</div>
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
