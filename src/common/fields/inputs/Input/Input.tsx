import React from 'react';

import styles from './Input.module.css';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  isLoading?: boolean;
}

export const Input: React.FC<InputProps> = ({ id, isLoading, ...props }) => (
  <label className={styles.label} htmlFor={id}>
    <span>{props.placeholder}</span>
    <input
      className={styles.input}
      type={props.type || 'text'}
      id={id}
      disabled={isLoading}
      {...props}
      placeholder=''
    />
  </label>
);
