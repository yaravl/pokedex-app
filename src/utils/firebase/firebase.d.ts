type UsersCollections = import('@firebase/firestore').WithFieldValue<
  import('@firebase/firestore').DocumentData
> & {
  myPokemons: { id: number; name: string }[];
};
