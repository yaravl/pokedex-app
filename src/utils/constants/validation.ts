export const emailSchema = {
  required: 'Email is required',
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Please enter a valid email'
  }
};

export const passwordSchema = {
  required: 'Password is required',
  minLength: { value: 6, message: 'Password must be more then 6 characters' }
};
