import React from 'react';
import { Box, Avatar, Divider, useTheme } from '@material-ui/core';
import { Navigation } from '../containers';
import { Draggable } from '../components';
import { WindowsControl } from '../features';

type Props = {
  children: React.ReactNode;
};

export default function BasicLayout({ children }: Props) {
  const theme = useTheme();
  return (
    <Box display="flex" width="100vw" height="100vh">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        flexShrink={0}
        pt={2}
        pb={2}
        width={65}
        height="100vh"
        bgcolor={theme.palette.primary.main}
      >
        <Avatar />
        <Box mb={2} />
        <Navigation />
      </Box>

      <Box display="flex" flexDirection="column" flex={1} height="100vh">
        <Draggable display="flex" justifyContent="flex-end" alignItems="center" height={30}>
          <WindowsControl />
        </Draggable>
        <Divider />
        {children}
      </Box>
    </Box>
  );
}
