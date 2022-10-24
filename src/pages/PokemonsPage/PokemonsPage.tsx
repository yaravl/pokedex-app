import React from 'react';

import { Pokemon } from './Pokemon/Pokemon';

export const PokemonsPage = () => {
  const [pokemons, setPokemons] = React.useState(Array.from({ length: 20 }));

  console.log('@pokemons', pokemons);
  return (
    <div className='container'>
      <h1>Pokemons Page</h1>
      <div className='grid grid-cols-3 gap-3'>
        {pokemons.map((_el: any, index: number) => (
          <Pokemon key={index + 1} id={index + 1} />
        ))}
      </div>
    </div>
  );
};
