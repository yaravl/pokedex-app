interface RequestQueryParams<T, K, E> {
  params: T;
  config?: Omit<
    import('@tanstack/react-query').UseQueryOptions<K, E, TData, TQueryKey>,
    'queryKey' | 'queryFn' | 'initialData'
  > & { initialData?: () => undefined };
}
