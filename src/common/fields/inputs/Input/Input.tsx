import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  isLoading?: boolean;
}

export const Input: React.FC<InputProps> = ({ id, isLoading, register, ...props }) => (
  <label className={styles.label} htmlFor={id}>
    <span>{props.placeholder}</span>
    <input
      {...register(props.name || '')}
      className={styles.input}
      type={props.type || 'text'}
      id={id}
      disabled={isLoading}
      {...props}
      placeholder=''
    />
  </label>
);
