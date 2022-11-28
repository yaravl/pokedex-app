import React from 'react';

import { useRequestPokemonEvolutionChainQuery, useRequestPokemonSpeciesQuery } from '@utils/api';
import { generatePokemonChain, getRequestIdNumber } from '@utils/helpers';

interface PokemonEvolutionChainNewProps {
  id: number;
}

export const PokemonEvolutionChainNew: React.FC<PokemonEvolutionChainNewProps> = ({ id }) => {
  const {
    data: speciesData,
    isError: speciesError,
    isLoading: speciesLoading
  } = useRequestPokemonSpeciesQuery({
    id
  });

  const evolutionChainId = speciesData && getRequestIdNumber(speciesData, 'evolution_chain');

  const {
    data: evChainData,
    isError: evChainError,
    isLoading: evChainLoading
  } = useRequestPokemonEvolutionChainQuery({
    id: evolutionChainId!,
    options: {
      enabled: !!evolutionChainId
    }
  });
  if (speciesLoading || evChainLoading) return <h2>Loading...</h2>;
  if (speciesError || evChainError) return <h2>Error...</h2>;

  const evChain = generatePokemonChain(speciesData.name, evChainData.chain);

  console.log(speciesData.name, evChain);

  return (
    <div>
      <div>prev: {evChain && evChain.prev && evChain.prev.species?.name}</div>
      <div>current: {evChain && evChain.current.species.name}</div>
      <div>next: {evChain && evChain.next && evChain.next[0]?.species?.name}</div>
    </div>
  );
};
