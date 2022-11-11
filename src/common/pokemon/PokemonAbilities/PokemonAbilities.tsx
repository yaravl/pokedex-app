import React from 'react';

const snakeCaseToTitleCase = (str: string) =>
  str.replace(/^(.)|-+(.)/g, (_, p1, p2) => (p1 ? p1.toUpperCase() : ` ${p2.toUpperCase()}`));

interface PokemonAbilitiesProps {
  pokemon: Pokemon;
}

export const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({ pokemon }) => (
  <div className='abilities'>
    <h2 className='pb-2.5 text-xl'>Abilities</h2>
    <ul className='list-disc space-y-2 pl-5'>
      {pokemon.abilities.map(({ ability }) => (
        <li key={ability.name}>
          <div>{snakeCaseToTitleCase(ability.name)}</div>
          <div className='text-sm text-gray-500'>Description</div>
        </li>
      ))}
    </ul>
  </div>
);
