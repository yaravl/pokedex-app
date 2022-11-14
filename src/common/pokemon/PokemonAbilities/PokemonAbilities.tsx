import React from 'react';

import { useRequestPokemonAbilitiesQuery } from '@utils/api';
import { getRequestIdNumber } from '@utils/helpers';

const snakeCaseToTitleCase = (str: string) =>
  str.replace(/^(.)|-+(.)/g, (_, p1, p2) => (p1 ? p1.toUpperCase() : ` ${p2.toUpperCase()}`));

interface PokemonAbilitiesProps {
  pokemon: Pokemon;
}

export const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({ pokemon }) => {
  const abilitiesNumbers = pokemon.abilities.map((item) => getRequestIdNumber(item, 'ability'));

  const abilitiesQuery = useRequestPokemonAbilitiesQuery({ abilities: abilitiesNumbers });

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
