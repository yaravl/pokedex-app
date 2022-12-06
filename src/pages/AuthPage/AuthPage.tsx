import React from 'react';

import { SignInForm, SignUpForm } from './components';

import styles from './AuthPage.module.css';

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
