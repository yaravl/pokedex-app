interface RequestQueryParams<T, K, E> {
  params: T;
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<K, E, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >;
}
