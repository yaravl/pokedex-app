import React from 'react';
import { useInView } from 'react-intersection-observer';

import { useRequestPokemonInfiniteQuery } from '@utils/api';

import { PokemonCard } from '@common/pokemon';

import styles from './PokemonsPage.module.css';

export const PokemonsPage = () => {
  const { ref, inView } = useInView();


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

  return (
      <div className={styles.pokemons_container}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => {
            const pokemonId = index + 1;
            return (
              <PokemonCard
                pokemonName={pokemon.name}
                pokemonId={pokemonId}
              />
            );
          })}
        <button ref={ref} onClick={() => hasNextPage && fetchNextPage()}>
          load more
        </button>
      </div>


  );
};
