interface UseRequestMutationQuery<Func = {}> {
  options?: Omit<
    import('@tanstack/react-query').UseMutationOptions<
      Awaited<ReturnType<Func>>,
      import('axios').AxiosError,
      any
    >,
    'mutationFn' | 'mutationKey'
  >;
}

interface UseRequestPokemonQuery {
  params: { name: Pokemon['name'] | Pokemon['id'] };
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
