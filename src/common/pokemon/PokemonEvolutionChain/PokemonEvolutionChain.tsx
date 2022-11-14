import React from 'react';

import { useRequestPokemonEvolutionChainQuery, useRequestPokemonSpeciesQuery } from '@utils/api';
import { getRequestIdNumber } from '@utils/helpers';

import styles from './PokemonEvolutionChain.module.css';

interface PokemonEvolutionChainProps {
  id: number;
}

export const PokemonEvolutionChain: React.FC<PokemonEvolutionChainProps> = ({ id }) => {
  const {
    data: speciesData,
    isLoading: speciesLoading,
    isError: speciesError
  } = useRequestPokemonSpeciesQuery({
    id,
    options: { staleTime: Infinity, cacheTime: Infinity, refetchInterval: false }
  });

  const evChainId = !speciesLoading ? getRequestIdNumber(speciesData, 'evolution_chain') : 0;

  const {
    data: evChainData,
    isLoading: evChainLoading,
    isError: evChainError
  } = useRequestPokemonEvolutionChainQuery({
    id: evChainId,
    options: {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchInterval: false,
      enabled: !!evChainId
    }
  });
  if (speciesLoading || evChainLoading) return <h2>Loading...</h2>;
  if (speciesError || evChainError) return <h2>Error...</h2>;

  // console.log('Species-data', speciesData);
  console.log('EvChain-data', evChainData);

  const chainArr = (data: typeof evChainData) => {
    const arr = [];

    if (!data.chain.evolves_to) return arr;

    const getPokemonNames = (evArr: ChainLink[]) => {
      if (evArr.length === 0) return false;
      const speciesNames = [];

      for (let i = 0; i < evArr.length; i++) {
        if (evArr[i].species) {
          speciesNames.push(evArr[i].species.name);
        }
        if (evArr[i].evolves_to) {
          getPokemonNames(evArr[i].evolves_to);
        }
      }
      arr.push(speciesNames);
      console.log(speciesNames);
    };
    getPokemonNames(data.chain.evolves_to);
    arr.reverse();
    arr.unshift([data.chain.species.name]);
    return arr;
  };

  // Доделать цепочку эволюции

  console.log(chainArr(evChainData));

  return (
    <div className={styles.evolution}>
      <h2>Evolution Chain</h2>
      id:{id}
    </div>
  );
};

// chain - {}
//  species - {}  = 1
//    name - string
//  evolute_to - []
//    [0] - {}
//      species - {}  = 2
//        name - string
//      evolves_to - []
//        species - {}  = 3
//          name - string

// chain.evolute_to[0].species.name
// chain.evolute_to[0].evolves_to[0].species.name
