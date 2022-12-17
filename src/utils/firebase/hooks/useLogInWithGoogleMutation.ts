import { useMutation } from '@tanstack/react-query';

import { logInWithGoogle } from '../requests/logInWithGoogle';

export const useLogInWithGoogleMutation = (
  options: UseRequestMutationQuery<typeof logInWithGoogle> = {}
) => useMutation(['signInGoogle'], () => logInWithGoogle(), options.options);
