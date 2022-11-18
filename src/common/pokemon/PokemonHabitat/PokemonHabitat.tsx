import React from 'react';

import { useRequestPokemonSpeciesQuery } from '@utils/api';

import styles from './PokemonHabitat.module.css';

interface PokemonHabitatProps {
  id: number;
}

export const PokemonHabitat: React.FC<PokemonHabitatProps> = ({ id }) => {
  const { data, isLoading, isError } = useRequestPokemonSpeciesQuery({
    id
  });

  if (isError) return <h2>Error</h2>;
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className={styles.habitat}>
      <h2>Habitat</h2>
      <p>{data?.habitat?.name || 'N/A'}</p>
    </div>
  );
};
