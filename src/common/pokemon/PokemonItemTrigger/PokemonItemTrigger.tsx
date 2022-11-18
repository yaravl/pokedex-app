import React from 'react';

import { useRequestItemQuery } from '@utils/api';

interface PokemonItemTriggerProps {
  item: string;
}

export const PokemonItemTrigger: React.FC<PokemonItemTriggerProps> = ({ item }) => {
  const { data, isLoading, isError } = useRequestItemQuery({ item });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;

  return <img alt={data.name} src={data.sprites.default} />;
};
