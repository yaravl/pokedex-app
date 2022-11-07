import React from 'react';

import { PokemonType } from '@common/pokemon';

import styles from './PokemonTypes.module.css';

interface PokemonTypesProps {
  types: PokemonType[];
}

export const PokemonTypes: React.FC<PokemonTypesProps> = ({ types }) => (
  <div className={styles.container}>
    {types.map(({ type }, index) => (
      <PokemonType key={index} type={type} />
    ))}
  </div>
);
