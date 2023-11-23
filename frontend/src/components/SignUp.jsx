import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, updateEmail, updateIsAuth } from 'store/slices/userSlice';


const defaultTheme = createTheme();

export default function SignUp() {
  const { email } = useSelector((state) => state.user);
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [formValid, setFormValid] = useState(false)
  const dispatch = useDispatch();
  const push = useNavigate();

  useEffect(() => {
    if (emailDirty || passwordDirty) {
        setFormValid(false)
    } else {
        setFormValid(true)
    }
},[emailDirty, passwordDirty])

const emailHandler = (e) => {
  dispatch(updateEmail(e.target.value));
    /*const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if (!re.test(String(email).toLowerCase())) {
        setEmailDirty(true)
    } else {
        setEmailDirty(false)
    }*/
}

const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 24){
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
      const response = await fetch('http://localhost:3001/auth/registration', {
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
          push('/');
      } else {
          console.error('Помилка реєстрації:', response.status);
          alert('Помилка реєстрації. Перевірте введені дані.');
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {/* Ось тут ваші поля для вводу додаткових даних */}
            {/* Додайте їх та обробники подій, які вам потрібні */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  color={emailDirty ? 'error' : 'primary'}
                  onChange={e => emailHandler(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  color={passwordDirty ? 'error' : 'primary'}
                  onChange={e => passwordHandler(e)}
                />
              </Grid>
            </Grid>
            {/* Кінець полів для вводу додаткових даних */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!formValid}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
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
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Form} from './Form';
import {setUser} from 'store/slices/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const push = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(console.error)
    }

    return (
        <Form
            title="register"
            handleClick={handleRegister}
        />
    )
}

export default SignUp

*/
