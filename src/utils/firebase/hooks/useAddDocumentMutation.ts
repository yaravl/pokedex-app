import { useMutation } from '@tanstack/react-query';

import { addDocument } from '../requests/addDocument';

interface UseAddDocumentMutation {
  collectionName: string;
  data: object;
}

export const useAddDocumentMutation = (options: UseRequestMutationQuery<typeof addDocument> = {}) =>
  useMutation(
    ['addCollectionToFirebase'],
    (params: UseAddDocumentMutation) => addDocument(params.collectionName, params.data),
    options.options
  );
