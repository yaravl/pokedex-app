import React from 'react';

import { useRequestPokemonAbilitiesQuery } from '@utils/api';
import { snakeCaseToTitleCase } from '@utils/helpers';

interface PokemonAbilitiesProps {
  pokemon: Pokemon;
}

export const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({ pokemon }) => {
  const abilitiesNames = pokemon.abilities.map(({ ability }) => ability.name);

  const abilitiesQuery = useRequestPokemonAbilitiesQuery({ abilities: abilitiesNames });

  const isError = abilitiesQuery.some(({ isError }) => isError);
  const isLoading = abilitiesQuery.some(({ isLoading }) => isLoading);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{abilitiesQuery[0].error?.message}</h2>;

  const abilities = abilitiesQuery.map(({ data }) => data);

  return (
    <div className='abilities'>
      <h2 className='pb-2.5 text-xl'>Abilities</h2>
      <ul className='list-disc space-y-2 pl-5'>
        {abilities.map((ability) => {
          const shortEffect = ability?.effect_entries.find(
            (effect) => effect.language.name === 'en'
          );

          return (
            <li key={ability?.name}>
              <div>{snakeCaseToTitleCase(ability?.name || '')}</div>
              <div className='text-sm text-gray-500'>{shortEffect?.short_effect}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
