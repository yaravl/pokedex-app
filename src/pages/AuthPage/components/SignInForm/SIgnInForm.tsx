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
          {...register('email', { required: 'Email format would be asd@asd.com' })}
        />
        <Input
          type='password'
          placeholder='Password'
          error={errors.password?.message}
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password would be more then 6 characters' }
          })}
        />

        <Button type='submit' variant='outlined' disabled={isSubmitting}>
          Sign In
        </Button>
      </form>
    </>
  );
};

// TODO: 51:00
