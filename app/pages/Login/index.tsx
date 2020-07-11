import React from 'react';
import { useTheme } from '@material-ui/core';
import { LoginForm } from '../../containers';
import { Draggable } from '../../components';

export default function Login() {
  const theme = useTheme();
  return (
    <Draggable
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      bgcolor={theme.palette.grey[300]}
    >
      <LoginForm />
    </Draggable>
  );
}
