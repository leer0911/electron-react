import React from 'react';
import { FormControl, Input, InputAdornment } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function LoginForm() {
  const Adornment = (
    <InputAdornment position="start">
      <AccountCircle />
    </InputAdornment>
  );
  return (
    <FormControl>
      <Input id="username" startAdornment={Adornment} />
      <Input id="password" startAdornment={Adornment} />
    </FormControl>
  );
}
