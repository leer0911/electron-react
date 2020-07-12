import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
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
import { useForm } from 'react-hook-form';
import { fakeAuth } from '../PrivateRoute';
import { login, LoginParam } from '../../services';

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
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleLogin = async (data: LoginParam) => {
    const res = await login({ ...data });
    if (res.code === 200) {
      fakeAuth.authenticate();
      history.push('/home');
    } else {
      setOpen(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert severity="error">账号或密码错误！</Alert>
      </Snackbar>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          vv work
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(handleLogin)}>
          <TextField
            inputRef={register}
            size="small"
            variant="outlined"
            margin="normal"
            id="username"
            label="邮箱"
            name="username"
            autoFocus
            required
            fullWidth
          />
          <TextField
            inputRef={register}
            size="small"
            variant="outlined"
            margin="normal"
            name="password"
            label="密码"
            type="password"
            id="password"
            required
            fullWidth
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="记住密码" />
          <Button size="large" type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
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
