import { useMutation } from '@tanstack/react-query';

import { registerWithEmailAndPassword } from '../requests/registerWithEmailAndPassword';

interface UseRegisterWithEmailAndPasswordMutation {
  user: User;
  password: string;
}

export const useRegisterWithEmailAndPasswordMutation = (options: UseRequestMutationQuery = {}) =>
  useMutation(
    ['signUp'],
    (params: UseRegisterWithEmailAndPasswordMutation) =>
      registerWithEmailAndPassword(params.user, params.password),
    {
      ...options,
      onSuccess: (data) => console.log(data),
      onError: (error) => console.log(error)
    }
  );
