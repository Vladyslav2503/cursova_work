import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { setUser, updateEmail, updateIsAuth } from 'store/slices/userSlice';
import { Alert } from '@mui/material';
import {auth} from "../firabase"

const defaultTheme = createTheme();


export default function SignIn() {
  const { email } = useSelector((state) => state.user);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const push = useNavigate();
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [formValid, setFormValid] = useState(false)
  const [error, setError] = useState('');



  useEffect(() => {
    if (emailDirty || passwordDirty) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailDirty, passwordDirty])

  const emailHandler = (e) => {
    dispatch(updateEmail(e.target.value));
   /* const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(email).toLowerCase())) {
      setEmailDirty(true)
    } else {
      setEmailDirty(false)
    }*/
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 24) {
      setPasswordDirty(true)
    } else {
      setPasswordDirty(false)
    }
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
        username: email,
        password: password,
    };

    try {
        const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            const result = await response.json();
            localStorage.setItem('token', result.token);
            dispatch(updateIsAuth(true))
            console.log("dispatch")
            push('/');
        } else {
            if (response.status === 400) {
                alert('Неправильний пароль');
            }
        }
    } catch (error) {
        console.error('Помилка при відправленні запиту:', error);
    }
};

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              color={emailDirty ? 'error' : 'primary'}
              onChange={e => emailHandler(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              color={passwordDirty ? 'error' : 'primary'}
              onChange={e => passwordHandler(e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            {error && ( // Відобразіть Alert, коли є помилка
              <Alert severity="error">
                {error}
              </Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!formValid}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}







/*import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form} from './Form';
import {setUser} from 'store/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const push = useNavigate();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    )
}

export default Login

*/


