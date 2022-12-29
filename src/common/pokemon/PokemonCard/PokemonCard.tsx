import React from 'react';
import { Link } from 'react-router-dom';

import { PokemonTypes } from '@common';
import { useRequestPokemonQuery } from '@utils/api';

import styles from './PokemonCard.module.css';
import classNames from "classnames";

interface PokemonCardProps {
  pokemonName: string;
  pokemonId: number;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonId,pokemonName }) => {
  const { data, isLoading, isError } = useRequestPokemonQuery({
    params: { name: pokemonId }
  });

  if (isError) return <h5>Error!</h5>;
  if (isLoading) return <h5>Loading...</h5>;

  return (
    <Link to={`pokemon/${pokemonName}`} className={styles.pokemon}>
      <div className={styles.pokemon_header}>
        <h2>{data.name}</h2>
        <div>#{data.id.toString().padStart(3, '0')}</div>
      </div>
      <div className={styles.pokemon_types}>
        <PokemonTypes types={data.types} />
      </div>
      <img src={data.sprites.other["official-artwork"].front_default || ''} alt='pokemon' height={344} width={344} />
      <div className={classNames(styles.pokemon_bg, `bg-elm-${data.types[0].type.name}`)}></div>
    </Link>
  );
};
