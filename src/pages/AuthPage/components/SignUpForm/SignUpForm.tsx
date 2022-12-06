import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@common';
import { registerWithEmailAndPassword } from '@utils/firebase';

import styles from '../../AuthPage.module.css';

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
