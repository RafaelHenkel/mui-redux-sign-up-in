import GppGoodIcon from '@mui/icons-material/GppGood';
import { Button, Container, Grid2 as Grid, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selector = useAppSelector(state => state.users);

  function validEmail() {
    const emailValid = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
    if (!emailValid) {
      alert('E-mail inválido');
      return;
    }
    handleSignUp();
  }

  function handleSignUp() {
    if (email === '' || password === '' || passwordConfirm === '') {
      alert('Preencha todos os campos');
      return;
    }
    if (password.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres');
      return;
    }
    if (selector.find(user => user.email === email)) {
      alert('E-mail já cadastrado');
      return;
    }
    if (password === passwordConfirm) {
      dispatch({ type: 'users/addUser', payload: { email, password } });
      alert('Usuário cadastrado com sucesso');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      navigate('/');
    } else {
      alert('As senhas não conferem');
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
