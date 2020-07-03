import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import MoodIcon from '@material-ui/icons/Mood';
import ImageIcon from '@material-ui/icons/Image';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1),

      '& > svg': {
        marginRight: theme.spacing(2),
        color: grey[500],
      },
    },
  })
);

export default function SvgIconsColor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageIcon />
      <MoodIcon />
      <ThumbUpAltIcon />
    </div>
  );
}
