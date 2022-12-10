import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '@common';
import { emailSchema, passwordSchema, ROUTES } from '@utils/constants';
import { useStore } from '@utils/contexts';
import { useRegisterWithEmailAndPasswordMutation } from '@utils/firebase';
import { setCookie } from '@utils/helpers';

import styles from '../../AuthPage.module.css';

interface SignUpFormValues extends User {
  password: string;
}

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const { setStore } = useStore();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<SignUpFormValues>();

  const { mutate, isLoading: isLoadingRegisterWithEmailAndPassword } =
    useRegisterWithEmailAndPasswordMutation({
      options: {
        onSuccess: (data) => {
          console.log('@@@data');
          setCookie('POKEMONS-AUTH', !!data && data.user.uid);
          navigate(ROUTES.POKEMONS);
          setStore({ sessions: { isSignIn: true } });
        }
      }
    });

  const isLoading = isLoadingRegisterWithEmailAndPassword || isSubmitting;

  return (
    <>
      <h1 className={styles.title}>Sign Up</h1>
      <form
        className={styles.sign_up_form}
        onSubmit={handleSubmit(({ password, ...user }) => mutate({ user, password }))}
      >
        <Input
          placeholder='Name'
          error={errors.name?.message}
          {...register('name', { required: 'Name is required' })}
        />
        <Input
          placeholder='Favorite Pokemon'
          error={errors.favoritePokemon?.message}
          {...register('favoritePokemon')}
        />
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
          Sign Up
        </Button>
      </form>
    </>
  );
};
