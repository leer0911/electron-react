import React from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import ImageIcon from '@material-ui/icons/Image';
import EmojiBox from './EmojiBox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1),
      '& > *': {
        marginRight: theme.spacing(1),
        color: grey[500],
      },
    },
    input: {
      display: 'none',
    },
  })
);

export default function SvgIconsColor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton component="span" size="small">
          <ImageIcon />
        </IconButton>
      </label>

      <EmojiBox />
    </div>
  );
}
