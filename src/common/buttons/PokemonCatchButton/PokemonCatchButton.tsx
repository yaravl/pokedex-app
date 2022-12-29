import React from 'react';
import {Button} from "@common/buttons";
import {useStore} from "@utils/contexts";

export const PokemonCatchButton = () => <button>Catch!</button>;

// пять состояний
// Catch, already in collection === catching, failed, caught

//  const updateUsersMutation = useUpdateUsersMutation({
//     options: {
//       onSuccess: (data) => data
//     }
//   });
// const {
//   sessions,
//   user,
//   data: { myPokemons },
//   setStore
// } = useStore();
// {sessions.isSignIn && (
//   <Button
//     isLoading={addDocumentMutation.isLoading}
//     onClick={() => {
//       updateUsersMutation.mutate({
//         collectionName: 'users',
//         userId: user.uid,
//         data: { myPokemons: [{ id: pokemonId, name: pokemonName }] }
//       });
//       const pokemonContains = myPokemons.some((item) => item.id === pokemonId);
//       if (!pokemonContains) {
//         setStore({
//           data: { myPokemons: [...myPokemons, { id: pokemonId, name: pokemonName }] }
//         });
//       }
//     }}
//   >
//     Add to favorites
//   </Button>
// )}