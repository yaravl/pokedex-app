import React from 'react';
import { useInView } from 'react-intersection-observer';

import { useRequestPokemonInfiniteQuery } from '@utils/api';
import { useDebounce } from '@utils/hooks';

import { Pokemon } from './Pokemon/Pokemon';

import styles from './PokemonsPage.module.css';

export const PokemonsPage = () => {
  const [pokemonId, setPokemonId] = React.useState<Pokemon['id'] | Pokemon['name'] | null>(null);
  const debouncedId = useDebounce(pokemonId, 1000);
  const { ref, inView } = useInView();
  const {
    data: dataPages,
    isError,
    isLoading,
    fetchNextPage
  } = useRequestPokemonInfiniteQuery({
    options: {
      retry: 1,
      staleTime: 50000,
      cacheTime: 50000
    }
  });

  React.useEffect(() => {
    if (inView) {
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
            const id = index + 1;
            return (
              <div
                onMouseEnter={() => {
                  setPokemonId(id);
                }}
                onMouseLeave={() => setPokemonId(null)}
                className={styles.pokemon}
                key={pokemon.name}
              >
                <div>
                  <div className={styles.pokemon_number}>#{id.toString().padStart(3, '0')}</div>
                  <div className={styles.pokemon_name}>{pokemon.name}</div>
                </div>
                {debouncedId === id && (
                  <div className={styles.pokemon_wrap}>
                    <Pokemon pokemonId={id} />
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <button ref={ref} onClick={() => fetchNextPage()}>
        load more
      </button>
    </div>
  );
};
