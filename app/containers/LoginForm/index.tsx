import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { fakeAuth } from '../PrivateRoute';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#fff',
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          vv work
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            size="small"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="邮箱"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            size="small"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="密码"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="记住密码" />
          <Button
            size="large"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              fakeAuth.authenticate();
              history.push('/home');
            }}
          >
            登录
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                忘记密码？
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
