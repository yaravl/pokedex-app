import { User } from 'firebase/auth';

import { useMutation } from '@tanstack/react-query';

import { Collection } from '../instance';
import { addDocument } from '../requests/addDocument';

interface UseAddDocumentPokemonMutation {
  collectionName: Extract<Collection, 'pokemons'>;
  data: { uid: User['uid']; pokemonName: Pokemon['name'] };
}

type UseAddDocumentMutation = UseAddDocumentPokemonMutation;

export const useAddDocumentMutation = (options: UseRequestMutationQuery<typeof addDocument> = {}) =>
  useMutation(
    ['addCollectionToFirebase'],
    (params: UseAddDocumentMutation) => addDocument(params.collectionName, params.data),
    options.options
  );
