import React from 'react';

import { PokemonItemTrigger } from '@common';

interface PokemonEvolutionCardProps {
  name: string;
  trigger: string | number | null;
}

export const PokemonEvolutionCard: React.FC<PokemonEvolutionCardProps> = ({ name, trigger }) => (
  <div>
    {name}
    {typeof trigger === 'string' && <PokemonItemTrigger item={trigger} />}
    {typeof trigger === 'number' && <p>LvL: {trigger}</p>}
  </div>
);

// TODO: доделать карточку(стили, картинку, поколение)
