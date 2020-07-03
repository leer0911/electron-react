import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { common } from '@material-ui/core/colors';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    background: 'none',
    justifyContent: 'start',
    height: 'auto',
  },
  actionRoot: {
    flex: 0,
    maxWidth: 'none',
    minWidth: 'auto',
    color: common.white,
    opacity: 0.7,
    '&$selected': {
      opacity: 1,
      color: common.white,
    },
  },
  actionLabel: {
    color: common.white,
    marginTop: 4,
    fontSize: '0.7rem',
    '&$selected': {
      fontSize: '0.7rem',
    },
  },
  selected: {},
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        classes={{
          root: classes.actionRoot,
          label: classes.actionLabel,
          selected: classes.selected,
        }}
        label="消息"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        classes={{
          root: classes.actionRoot,
          label: classes.actionLabel,
          selected: classes.selected,
        }}
        label="文档"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        classes={{
          root: classes.actionRoot,
          label: classes.actionLabel,
          selected: classes.selected,
        }}
        label="工作"
        icon={<LocationOnIcon />}
      />

      <BottomNavigationAction
        classes={{
          root: classes.actionRoot,
          label: classes.actionLabel,
          selected: classes.selected,
        }}
        label="通讯录"
        icon={<LocationOnIcon />}
      />
    </BottomNavigation>
  );
}
