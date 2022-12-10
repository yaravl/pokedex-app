import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '@common';
import { emailSchema, passwordSchema, ROUTES } from '@utils/constants';
import { useStore } from '@utils/contexts';
import { useLogInWithEmailAndPasswordMutation } from '@utils/firebase';
import { setCookie } from '@utils/helpers';

import styles from '../../AuthPage.module.css';

interface SignInFormValues {
  email: User['email'];
  password: string;
}

export const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const { setStore } = useStore();

  const { mutate, isLoading: isLoadingLogInWithEmailAndPassword } =
    useLogInWithEmailAndPasswordMutation({
      options: {
        onError: (error) => console.log('@@@error', error.message),
        onSuccess: (data) => {
          console.log('@@@login', data.user);
          setCookie('POKEMONS-AUTH', !!data && data.user.uid);
          navigate(ROUTES.POKEMONS);
          setStore({ sessions: { isSignIn: true } });
        }
      }
    });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<SignInFormValues>();

  const isLoading = isLoadingLogInWithEmailAndPassword || isSubmitting;

  return (
    <>
      <h1 className={styles.title}>Sign In</h1>
      <form
        className={styles.sign_up_form}
        onSubmit={handleSubmit(async ({ password, email }) => mutate({ email, password }))}
      >
        <Input
          type='email'
          placeholder='Email'
          error={errors.email?.message}
          {...register('email', emailSchema)}
        />
        <Input
          type='password'
          placeholder='Password'
          error={errors.password?.message}
          {...register('password', passwordSchema)}
        />

        <Button type='submit' variant='contained' isLoading={isLoading}>
          Sign In
        </Button>
        {isLoading && <p>LOADING...</p>}
      </form>
    </>
  );
};


// TODO: 55:00