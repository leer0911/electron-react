import React from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { MessageText } from '../../components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    rootAvatar: { minWidth: 'auto', marginRight: theme.spacing(1) },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

export default function MessageBox() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box display="flex" flex={1} height="100%">
      <Box width={200} flexShrink={0}>
        <div className={classes.toolbar} />
        <Divider />
        <List disablePadding>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="单聊" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Divider component="li" />
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                <>
                  <ListItem button key={text}>
                    <ListItemAvatar classes={{ root: classes.rootAvatar }}>
                      <Avatar className={classes.small} />
                    </ListItemAvatar>
                    <ListItemText primary={text} />
                  </ListItem>
                  <Divider component="li" />
                </>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
      <Divider orientation="vertical" />
      <Box flex={1} display="flex" flexDirection="column">
        <Box bgcolor={theme.palette.grey[100]}>
          <Toolbar>
            <Avatar />
            <Box pl={2} />
            <Typography noWrap>Permanent drawer</Typography>
          </Toolbar>
        </Box>

        <Divider />

        <Box flex={1} display="flex" flexDirection="column" height="100%">
          <Box flex="1" p={2} bgcolor={theme.palette.grey[200]}>
            <MessageText>Hi~</MessageText>
            <Box p={1} />
            <MessageText reverse>Hi~</MessageText>
          </Box>
          <Divider />
          <Box>
            <TextField rows={7} fullWidth multiline inputProps={{ style: { padding: theme.spacing(1) } }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
