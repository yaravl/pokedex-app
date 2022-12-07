import React from 'react';

import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isLoading?: boolean;
}

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ id, isLoading, error, ...props }, ref: React.ForwardedRef<HTMLInputElement>) => (
    <label className={styles.label} htmlFor={id}>
      <span>{props.placeholder}</span>
      <input
        ref={ref}
        className={styles.input}
        type={props.type || 'text'}
        id={id}
        disabled={isLoading}
        {...props}
        placeholder=''
      />
      {error && <p className={styles.error}>{error}</p>}
    </label>
  )
);
