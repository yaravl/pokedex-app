import { useMutation } from '@tanstack/react-query';

import { signout } from '../requests/signout';

export const useSignoutMutation = (options: UseRequestMutationQuery<typeof signout> = {}) =>
  useMutation(['signout'], () => signout(), options.options);
