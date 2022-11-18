interface UseRequestPokemonQueryByIdParams {
  params: { id: number };
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<Pokemon, import('axios').AxiosError>,
    'queryFn' | 'queryKey'
  >;
}

interface UseRequestPokemonQueryByNameParams {
  params: { name: string };
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<Pokemon, import('axios').AxiosError>,
    'queryFn' | 'queryKey'
  >;
}

interface UseRequestPokemonInfiniteQueryParams {
  options?: Omit<
    import('@tanstack/react-query').UseInfiniteQueryOptions<
      NamedAPIResourceList,
      import('axios').AxiosError
    >,
    'queryKey' | 'queryFn'
  >;
}

interface UsePokemonSpeciesQuery {
  id: number;
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<PokemonSpecies, import('axios').AxiosError>,
    'queryFn' | 'queryKey'
  >;
}
