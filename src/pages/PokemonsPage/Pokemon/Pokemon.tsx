import React from 'react';
import { Link } from 'react-router-dom';

import { useRequestPokemonQuery } from '@utils/api';

import styles from './Pokemon.module.css';

interface PokemonProps {
  pokemonId: any;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemonId }) => {
  const { data, isLoading, isError } = useRequestPokemonQuery({
    params: { id: pokemonId },
    options: { staleTime: 50000 }
  });

  if (isError) return <h5>Error!</h5>;
  if (isLoading) return <h5>Loading...</h5>;

  return (
    <Link to={`pokemon/${pokemonId}`} className={styles.pokemon}>
      <div className={styles.pokemon_types}>
        {data.types.map((type) => (
          <span key={type.type.name}>{type.type.name}</span>
        ))}
      </div>
      <img src={data?.sprites.front_default || ''} alt='pokemon' />
      <div className={styles.pokemon_stats}>
        <h4>Stats</h4>
        {data.stats.map((stat) => (
          <div className={styles.pokemon_stat} key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </div>
        ))}
      </div>
      <h2 className='text-left text-sm font-semibold capitalize'>{data.name}</h2>
    </Link>
  );
};

// TODO: 135
