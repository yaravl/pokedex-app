import classNames from 'classnames';
import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { PokemonItemTrigger } from '@common';
import { useRequestPokemonQueryByName, useRequestPokemonSpeciesQuery } from '@utils/api';

import styles from './PokemonEvolutionCard.module.css';

interface PokemonEvolutionCardProps {
  name: string;
  trigger: string | number | null;
}

export const PokemonEvolutionCard: React.FC<PokemonEvolutionCardProps> = ({ name, trigger }) => {
  const { data: pokemon } = useRequestPokemonQueryByName({ params: { name } });

  const pokemonId = pokemon?.id;

  const {
    data: pokemonSpecies,
    isError,
    isLoading
  } = useRequestPokemonSpeciesQuery({
    id: pokemonId!,
    options: {
      enabled: !!pokemonId
    }
  });

  if (isError) return <h2>Error!</h2>;
  if (isLoading) return <h2>Loading...</h2>;

  console.log(pokemonSpecies);

  return (
    <div className={classNames(styles.card, `bg-elm-${pokemon?.types[0].type.name}`)}>
      <Link to={`/pokemon/${name}`} className={styles.card_img}>
        <img
          src={pokemon?.sprites.other['official-artwork'].front_default || ''}
          alt={name}
          width={64}
          height={64}
        />
      </Link>

      <div className={styles.card_info}>
        <Link to={`/pokemon/${name}`}>{name}</Link>
        <p>{`Generation ${pokemonSpecies.generation.name
          .split('generation-')
          .join('')
          .toUpperCase()}`}</p>
      </div>
      {trigger && (
        <div className={styles.card_trigger}>
          {typeof trigger === 'string' && <PokemonItemTrigger item={trigger} />}
          {typeof trigger === 'number' && <p>LvL {trigger}</p>}
          <HiOutlineArrowNarrowRight />
        </div>
      )}
    </div>
  );
};

// TODO: доделать карточку(стили, картинку, поколение)
