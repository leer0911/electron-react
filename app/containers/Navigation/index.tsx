import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { common } from '@material-ui/core/colors';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import WorkIcon from '@material-ui/icons/Work';
import TextsmsIcon from '@material-ui/icons/Textsms';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const useStyles = makeStyles({
  root: {
    width: '100%',
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
    opacity: 0.5,
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
        icon={<TextsmsIcon />}
      />
      <BottomNavigationAction
        classes={{
          root: classes.actionRoot,
          label: classes.actionLabel,
          selected: classes.selected,
        }}
        label="文档"
        icon={<FolderIcon />}
      />
      <BottomNavigationAction
        classes={{
          root: classes.actionRoot,
          label: classes.actionLabel,
          selected: classes.selected,
        }}
        label="工作"
        icon={<WorkIcon />}
      />

      <BottomNavigationAction
        classes={{
          root: classes.actionRoot,
          label: classes.actionLabel,
          selected: classes.selected,
        }}
        label="通讯录"
        icon={<ContactPhoneIcon />}
      />
    </BottomNavigation>
  );
}
