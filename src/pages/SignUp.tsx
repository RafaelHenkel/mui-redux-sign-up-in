import GppGoodIcon from '@mui/icons-material/GppGood';
import { Alert, Button, Container, Grid2 as Grid, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [signUpConfirm, setSignUpConfirm] = useState<boolean>(false);
  const [signUpError, setSignUpError] = useState<boolean>(false);
  const [messageError, setmessageError] = useState<string>('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selector = useAppSelector(state => state.users);

  function validEmail() {
    const emailValid = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
    if (!emailValid) {
      setSignUpError(true);
      setmessageError('E-mail inválido');
      setTimeout(() => {
        setSignUpError(false);
        setmessageError('');
      }, 2000);
      return;
    }
    handleSignUp();
  }

  function handleSignUp() {
    if (email === '' || password === '' || passwordConfirm === '') {
      setSignUpError(true);
      setmessageError('Preencha todos os campos');
      setTimeout(() => {
        setSignUpError(false);
        setmessageError('');
      }, 2000);
      return;
    }
    if (password.length < 6) {
      setSignUpError(true);
      setmessageError('A senha deve ter no mínimo 6 caracteres');
      setTimeout(() => {
        setSignUpError(false);
        setmessageError('');
      }, 2000);
      return;
    }
    if (selector.find(user => user.email === email)) {
      setSignUpError(true);
      setmessageError('E-mail já cadastrado');
      setTimeout(() => {
        setSignUpError(false);
        setmessageError('');
      }, 2000);
      return;
    }
    if (password === passwordConfirm) {
      dispatch({ type: 'users/addUser', payload: { email, password } });
      setSignUpConfirm(true);
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setTimeout(() => {
        setSignUpConfirm(false);
        navigate('/');
      }, 2000);
    } else {
      setSignUpError(true);
      setmessageError('As senhas não conferem');
      setTimeout(() => {
        setSignUpError(false);
        setmessageError('');
      }, 2000);
    }
  }
  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Grid container spacing={4}>
          <Grid size={7}>
            <Paper sx={{ width: '100%', height: '100%', background: '#333' }}></Paper>
          </Grid>
          <Grid container size={5} spacing={2}>
            <Grid size={12} display={'flex'} justifyContent={'center'}>
              <GppGoodIcon
                sx={{ color: '#fff', fontSize: '3rem', background: '#4baf50', padding: '1rem', borderRadius: '10rem' }}
              />
            </Grid>
            <Grid size={12} display={'flex'} justifyContent={'center'}>
              <Typography variant="h3">Sign up</Typography>
            </Grid>
            <Grid size={12}>
              {signUpError ? (
                <Alert sx={{ position: 'absolute', top: '0', right: '0', margin: '20px' }} severity="error">
                  {messageError}
                </Alert>
              ) : (
                ''
              )}
            </Grid>
            <Grid size={12}>
              {signUpConfirm ? (
                <Alert sx={{ position: 'absolute', top: '0', right: '0', margin: '20px' }} severity="success">
                  Login efetuado com sucesso!
                </Alert>
              ) : (
                ''
              )}
            </Grid>
            <Grid size={12}>
              <TextField
                id="outlined-basic"
                type="email"
                size="medium"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                fullWidth
                label="E-mail"
                variant="outlined"
              />
            </Grid>
            <Grid size={12}>
              <TextField
                id="outlined-basic"
                size="medium"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid size={12}>
              <TextField
                id="outlined-basic"
                size="medium"
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
                required
                fullWidth
                type="password"
                label="Confirm Password"
                variant="outlined"
              />
            </Grid>
            <Grid size={12}>
              <Button variant="contained" onClick={validEmail} fullWidth>
                Cadastrar
              </Button>
            </Grid>
            <Grid size={12} display={'flex'} justifyContent={'center'}>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                Já possui uma conta?{' '}
                <Link style={{ color: 'black' }} to={'/'}>
                  Entre
                </Link>
              </Typography>
            </Grid>
            <Grid size={12} display={'flex'} justifyContent={'center'}>
              <Typography variant="body2">Copyright Rafael Henkel 2023.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SignUp;
