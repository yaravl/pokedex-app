import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@common';
import { useLogInWithEmailAndPasswordMutation } from '@utils/firebase';

import styles from '../../AuthPage.module.css';

interface SignInFormValues {
  email: User['email'];
  password: string;
}

export const SignInForm: React.FC = () => {
  const { mutate } = useLogInWithEmailAndPasswordMutation({
    options: { onError: (error) => console.log('@@@error', error.message) }
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<SignInFormValues>();
  console.log(errors);
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
          Sign In
        </Button>
      </form>
    </>
  );
};

// TODO: 51:00
