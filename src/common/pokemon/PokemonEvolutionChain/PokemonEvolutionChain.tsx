import React from 'react';

import { PokemonEvolutionCard } from '@common/pokemon/PokemonEvolutionChain/PokemonEvolutionCard/PokemonEvolutionCard';
import { useRequestPokemonEvolutionChainQuery, useRequestPokemonSpeciesQuery } from '@utils/api';
import { getPokemonChain, getRequestIdNumber } from '@utils/helpers';

import styles from './PokemonEvolutionChain.module.css';

interface PokemonEvolutionChainProps {
  id: number;
}

export const PokemonEvolutionChain: React.FC<PokemonEvolutionChainProps> = ({ id }) => {
  const { data: speciesData } = useRequestPokemonSpeciesQuery({
    id
  });

  const evChainId = speciesData && getRequestIdNumber(speciesData, 'evolution_chain');

  const {
    data: evChainData,
    isLoading: evChainLoading,
    isError: evChainError
  } = useRequestPokemonEvolutionChainQuery({
    id: evChainId!,
    options: {
      enabled: !!evChainId
    }
  });
  if (evChainLoading) return <h2>Loading...</h2>;
  if (evChainError) return <h2>Error...</h2>;

  const arrOfChains = getPokemonChain(evChainData);

  if (arrOfChains.length === 0) return null;

  return (
    <div className={styles.evolution}>
      <h2>Evolution Chain</h2>
      {arrOfChains.map((item, index) => (
        <ul key={index} className='mt-5 grid grid-cols-3 gap-5'>
          {item.map((pokemon) => (
            <li key={pokemon.name} className=''>
              <PokemonEvolutionCard name={pokemon.name} trigger={pokemon.trigger} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

// TODO: правильно показывать предметы нужные для эволюции