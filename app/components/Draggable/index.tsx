import React from 'react';
import { Box, BoxProps, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '-webkit-user-select': 'none',
    '-webkit-app-region': 'drag',
  },
});

export default function App(props: BoxProps) {
  const { children, ...rest } = props;
  const classes = useStyles();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Box className={classes.root} {...rest}>
      {children}
    </Box>
  );
}
