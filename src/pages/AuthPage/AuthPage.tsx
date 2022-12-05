import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@common';

import { logInWithEmailAndPassword, registerWithEmailAndPassword, User } from '../../firebase';

import styles from './AuthPage.module.css';

interface SignInFormValues {
  email: User['email'];
  password: string;
}

export const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SignInFormValues>();
  return (
    <form
      className={styles.sign_up_form}
      onSubmit={handleSubmit(({ password, email }) => logInWithEmailAndPassword(email, password))}
    >
      <Input type='email' placeholder='Email' {...register('email')} />
      <Input type='password' placeholder='Password' {...register('password')} />

      <Button type='submit' variant='outlined' disabled={isSubmitting}>
        Sign In
      </Button>
    </form>
  );
};

interface SignUpFormValues extends User {
  password: string;
}

export const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SignUpFormValues>();

  return (
    <form
      className={styles.sign_up_form}
      onSubmit={handleSubmit(({ password, ...user }) =>
        registerWithEmailAndPassword(user, password)
      )}
    >
      <Input placeholder='First name' {...register('firstName')} />
      <Input placeholder='Last name' {...register('lastName')} />
      <Input placeholder='City' {...register('city')} />
      <Input type='email' placeholder='Email' {...register('email')} />
      <Input type='password' placeholder='Password' {...register('password')} />

      <Button type='submit' variant='outlined' disabled={isSubmitting}>
        Sign Up
      </Button>
    </form>
  );
};

export const AuthPage = () => {
  const [isSignUp, setIsSignUp] = React.useState(true);

  return (
    <div className={styles.container}>
      {!isSignUp ? <SignInForm /> : <SignUpForm />}{' '}
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have account' : 'Sign Up'}
      </button>
    </div>
  );
};

// TODO: 1:40
