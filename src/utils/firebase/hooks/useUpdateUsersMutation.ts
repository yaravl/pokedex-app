import { User } from 'firebase/auth';

import { useMutation } from '@tanstack/react-query';

import { Collection } from '../instance';
import { updateUsersCollection } from '../requests/updateUsersCollection';

interface UseSetDocumentPokemonMutation {
  collectionName: Extract<Collection, 'users'>;
  userId: User['uid'];
  data: UsersCollections;
}

type UseUpdateUsersMutation = UseSetDocumentPokemonMutation;

export const useUpdateUsersMutation = (
  options: UseRequestMutationQuery<typeof updateUsersCollection> = {}
) =>
  useMutation(
    ['updateUsersCollectionFirebase'],
    (params: UseUpdateUsersMutation) =>
      updateUsersCollection(params.collectionName, params.userId, params.data),
    options.options
  );
