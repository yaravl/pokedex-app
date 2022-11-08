interface UseRequestPokemonQueryParams {
  params: { id: number };
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
