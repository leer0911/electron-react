import React from 'react';
import { Box } from '@material-ui/core';
import { LoginForm } from '../../containers';

export default function Login() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <LoginForm />
    </Box>
  );
}
