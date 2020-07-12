import React from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
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
import { AddCircleOutline } from '@material-ui/icons';
import { MessageText } from '../../components';
import MessageTool from '../MessageTool';

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
    toolbar: { display: 'flex', alignItems: 'center', padding: theme.spacing(2), ...theme.mixins.toolbar },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    send: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
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
      <Box width={240} flexShrink={0}>
        <div className={classes.toolbar}>
          <Box pr={1}>
            <TextField variant="outlined" size="small" />
          </Box>

          <IconButton component="span">
            <AddCircleOutline />
          </IconButton>
        </div>
        <Divider />
        <List disablePadding>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="单聊" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Divider component="li" />
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              {['刘亦菲', '王菲', '林俊杰', '周杰伦'].map((text) => (
                <>
                  <ListItem button key={text} selected={text === '刘亦菲'}>
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
            <Typography noWrap>刘亦菲</Typography>
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
            <MessageTool />
            <Divider />
            <TextField rows={7} fullWidth multiline inputProps={{ style: { padding: theme.spacing(1) } }} />
            <Box display="flex" alignItems="center" position="fixed" right={theme.spacing(3)} bottom={theme.spacing(2)}>
              <Typography variant="caption" color="textSecondary">
                Enter 发送，Ctrl+Enter 换行
              </Typography>
              <Box pr={2} />
              <Button variant="outlined">发送</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
