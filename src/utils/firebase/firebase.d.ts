type UsersCollections = import('@firebase/firestore').WithFieldValue<
  import('@firebase/firestore').DocumentData
> & {
  myPokemons: string[];
};
