import { AxiosError } from 'axios';

import { useMutation } from '@tanstack/react-query';

import { logInWithEmailAndPassword } from '../requests/logInWithEmailAndPassword';

interface UseLogInWithEmailAndPasswordMutation {
  email: User['email'];
  password: string;
}

export const useLogInWithEmailAndPasswordMutation = (
  options: UseRequestMutationQuery<typeof logInWithEmailAndPassword> = {}
) =>
  useMutation(
    ['signIn'],
    (params: UseLogInWithEmailAndPasswordMutation) =>
      logInWithEmailAndPassword(params.email, params.password),
    options.options
  );

// TODO: 25:00
