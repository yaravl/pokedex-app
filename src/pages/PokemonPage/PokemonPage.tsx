import classNames from 'classnames';
import React from 'react';
import { useParams } from 'react-router-dom';

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
      <div className={classNames(`bg-elm-${data.types[0].type.name}`, styles.hero)}>
        <div>
          {data.name}
          {data.id}
        </div>
        <div className={styles.imgwrap}>
          <img
            src={
              data.sprites.other['official-artwork'].front_default ||
              data.sprites.front_default ||
              ''
            }
            alt={`Pokemon - ${data.name}`}
          />
        </div>
        <div>types</div>
        <div>characteristics line</div>
      </div>
    </div>
  );
};
