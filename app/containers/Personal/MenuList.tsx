import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
          <ListItemText primary="设置" />
        </ListItem>
        <ListItem button selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
          <ListItemText primary="邀请" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
          <ListItemText primary="退出" />
        </ListItem>
      </List>
    </div>
  );
}
