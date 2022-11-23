import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@common';

import { registerWithEmailAndPassword, User } from '../../firebase';

import styles from './AuthPage.module.css';

interface SignUpFormValues extends User {
  password: string;
}

export const AuthPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitting, isSubmitSuccessful, isValid }
  } = useForm<SignUpFormValues>();
  const [isSignUp, setIsSignUp] = React.useState(true);

  const resetAsyncForm = React.useCallback(() => {
    const result = { firstName: 'asd', lastName: 'asd', email: 'asd', city: 'asd' };
    reset(result); // asynchronously reset your form values
  }, [reset]);

  React.useEffect(() => {
    resetAsyncForm();
  }, [resetAsyncForm]);

  return (
    <div className={styles.container}>
      {isSignUp && (
        <form
          className={styles.sign_up_form}
          onSubmit={handleSubmit(({ password, ...user }) =>
            registerWithEmailAndPassword(user, password)
          )}
        >
          <Input {...register('firstName')} placeholder='First name' />
          <Input {...register('lastName')} placeholder='Last name' />
          <Input type='email' {...register('email')} placeholder='Email' />
          <Input type='password' {...register('password')} placeholder='Password' />

          <Button type='submit' variant='outlined' disabled={isSubmitting}>
            Sign Up
          </Button>
        </form>
      )}
    </div>
  );
};

// TODO: 1:26
