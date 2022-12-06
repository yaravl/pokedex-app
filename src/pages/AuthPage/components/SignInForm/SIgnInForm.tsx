import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@common';
import { logInWithEmailAndPassword, useLogInWithEmailAndPasswordMutation } from '@utils/firebase';

import styles from '../../AuthPage.module.css';

interface SignInFormValues {
  email: User['email'];
  password: string;
}

export const SignInForm: React.FC = () => {
  const { mutate, data } = useLogInWithEmailAndPasswordMutation({
    options: { onSuccess: (data) => console.log(data, 'asd') }
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SignInFormValues>();
  return (
    <form
      className={styles.sign_up_form}
      onSubmit={handleSubmit(async ({ password, email }) => mutate({ email, password }))}
    >
      <Input type='email' placeholder='Email' {...register('email')} />
      <Input type='password' placeholder='Password' {...register('password')} />

      <Button type='submit' variant='outlined' disabled={isSubmitting}>
        Sign In
      </Button>
    </form>
  );
};
