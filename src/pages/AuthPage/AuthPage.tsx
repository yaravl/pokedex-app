import React from 'react';

import { Button } from '@common';

import { SignInForm, SignUpForm } from './components';

import styles from './AuthPage.module.css';

export const AuthPage = () => {
  const [isSignUp, setIsSignUp] = React.useState(true);

  return (
    <div className={styles.container}>
      {!isSignUp ? <SignInForm /> : <SignUpForm />}{' '}
      <Button variant='link' onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have account' : 'Sign Up'}
      </Button>
    </div>
  );
};
