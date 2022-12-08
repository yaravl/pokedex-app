import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@common';
import { useRegisterWithEmailAndPasswordMutation } from '@utils/firebase';

import styles from '../../AuthPage.module.css';

interface SignUpFormValues extends User {
  password: string;
}

export const SignUpForm: React.FC = () => {
  const { mutate } = useRegisterWithEmailAndPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<SignUpFormValues>();

  return (
    <>
      <h1 className={styles.title}>Sign Up</h1>
      <form
        className={styles.sign_up_form}
        onSubmit={handleSubmit(({ password, ...user }) => mutate({ user, password }))}
      >
        <Input placeholder='Name' {...register('name')} />
        <Input placeholder='Favorite Pokemon' {...register('favoritePokemon')} />
        <Input
          type='email'
          placeholder='Email'
          error={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email'
            }
          })}
        />
        <Input
          type='password'
          placeholder='Password'
          error={errors.password?.message}
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be more then 6 characters' }
          })}
        />

        <Button type='submit' variant='contained' disabled={isSubmitting}>
          Sign Up
        </Button>
      </form>
    </>
  );
};
