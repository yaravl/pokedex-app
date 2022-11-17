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

  const chainOfPokemons = (data: typeof evChainData) => {
    if (!data.chain.evolves_to.length) return [];

    const evArr = data.chain.evolves_to;

    if (evArr.length === 0) return [];

    const speciesNames: { name: string; trigger: string | number | null }[][] = [];
    for (let i = 0; i < evArr.length; i++) {
      const evPokemonObjs: { name: string; trigger: string | number | null }[] = [];
      const res: { name: string; trigger: string | number | null }[][] = [];

      const createObject = (data: ChainLink) => ({
        name: data.species.name,
        trigger:
          data.evolution_details[data.evolution_details.length - 1]?.item?.name ||
          data.evolution_details[data.evolution_details.length - 1]?.held_item?.name ||
          data.evolution_details[data.evolution_details.length - 1]?.min_level ||
          null
      });

      evPokemonObjs.push(createObject(data.chain), createObject(evArr[i]));

      const evTo = (evArray: ChainLink[]) => {
        for (let j = 0; j < evArray.length; j++) {
          res.push([...evPokemonObjs, createObject(evArray[j])]);
        }
      };
      if (evArr[i].evolves_to.length) {
        evTo(evArr[i].evolves_to);
      }
      if (!res.length) {
        res.push([createObject(data.chain), createObject(evArr[i])]);
      }
      speciesNames.push(...res);
    }

    return [...speciesNames];
  };

  // Доделать цепочку эволюции
  // Добавить подгрузку картинок предметов

  const evChainTriggersItems = chainOfPokemons(evChainData).reduce(
    (acc: (string | number | null)[], item) => {
      const a = item.filter((i) => typeof i.trigger === 'string').map((k) => k.trigger);
      return [...acc, ...a];
    },
    []
  );

  console.log('evChainTriggersItems', evChainTriggersItems);

  return (
    <div className={styles.evolution}>
      <h2>Evolution Chain</h2>
      id:{id}
      <ul />
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
