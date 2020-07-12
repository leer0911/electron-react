/**
 * @ Author: Lee
 * @ Description: 表情组件
 */

import React from 'react';
import { Box, Grid, useTheme } from '@material-ui/core';
import emojis from './emojis';

interface Props {
  onSelect: (emoji: string) => void;
}

export default function Emoji(props: Props) {
  const { onSelect } = props;
  const theme = useTheme();
  const handleClickEmoji = (emoji: string) => () => {
    onSelect(emoji);
  };

  return (
    <Box overflow="auto" width={400} height={300} bgcolor={theme.palette.background.default} p={2}>
      <Grid container spacing={1}>
        {emojis.map((emoji) => (
          <Grid key={emoji.id} item xs={2} onClick={handleClickEmoji(emoji.native)}>
            <Box fontSize={24} textAlign="center">
              {emoji.native}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
