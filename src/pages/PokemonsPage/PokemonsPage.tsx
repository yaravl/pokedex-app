import React from 'react';
import { useInView } from 'react-intersection-observer';

import { Popup } from '@common';
import { useRequestPokemonInfiniteQuery } from '@utils/api';

import { Pokemon } from './Pokemon/Pokemon';

import styles from './PokemonsPage.module.css';

export const PokemonsPage = () => {
  const [pokemonName, setPokemonName] = React.useState<Pokemon['name']>('');
  const [pokemonId, setPokemonId] = React.useState<Pokemon['id']>(0);
  const { ref, inView } = useInView();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const {
    data: dataPages,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage
  } = useRequestPokemonInfiniteQuery({});

  React.useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isError) {
    return <h1>ERROR</h1>;
  }
  if (isLoading) {
    return <h1>LOADING</h1>;
  }

  const pokemons = dataPages.pages.reduce(
    (arr: NamedAPIResource[], page) => [...arr, ...page.results],
    []
  );

  const handlePopupOpen = (name: string, id: number) => {
    setPokemonId(id);
    setPokemonName(name);
    setIsPopupOpen(true);
  };

  return (
    <div className='container '>
      <h1>Pokemons Page</h1>
      <button className='mr-2 border-2  p-2' onClick={() => console.log('prev')}>
        PREV PAGE
      </button>
      <button className='border-2 p-2' onClick={() => fetchNextPage()}>
        NEXT PAGE
      </button>

      <div className={styles.pokemons_container}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => {
            const pokemonId = index + 1;
            return (
              <div
                aria-label='pokemon-card'
                role='button'
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handlePopupOpen(pokemon.name, pokemonId)}
                onClick={() => handlePopupOpen(pokemon.name, pokemonId)}
                className={styles.pokemon}
                key={pokemon.name}
              >
                <div className={styles.pokemon_number}>
                  #{pokemonId.toString().padStart(3, '0')}
                </div>
                <div className={styles.pokemon_name}>{pokemon.name}</div>
              </div>
            );
          })}
      </div>
      <button ref={ref} onClick={() => hasNextPage && fetchNextPage()}>
        load more
      </button>
      <Popup onClose={() => setIsPopupOpen(false)} isOpen={isPopupOpen}>
        <Pokemon
          pokemonName={pokemonName}
          pokemonId={pokemonId}
          onClose={() => setIsPopupOpen(false)}
        />
      </Popup>
    </div>
  );
};
