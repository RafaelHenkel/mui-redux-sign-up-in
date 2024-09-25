import {
  Alert,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid2 as Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

function Home() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginConfirm, setLoginConfirm] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<boolean>(false);

  const selector = useAppSelector(state => state.users);

  function handleLogin() {
    const findEmail = selector.find(user => user.email === email);
    if (!findEmail) {
      setLoginError(true);
      setTimeout(() => {
        setLoginConfirm(false);
      }, 2000);
      return;
    }
    if (findEmail.password === password) {
      setLoginConfirm(true);
      setTimeout(() => {
        setLoginConfirm(false);
      }, 2000);
    } else {
      setLoginError(true);
      setTimeout(() => {
        setLoginConfirm(false);
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
              <LockOutlinedIcon
                sx={{ color: '#fff', fontSize: '3rem', background: '#e61e5f', padding: '1rem', borderRadius: '10rem' }}
              />
            </Grid>
            <Grid size={12} display={'flex'} justifyContent={'center'}>
              <Typography variant="h3">Sign in</Typography>
            </Grid>
            <Grid size={12}>
              {loginError ? (
                <Alert sx={{ position: 'absolute', top: '0', right: '0', margin: '20px' }} severity="error">
                  E-mail ou senha incorretos.
                </Alert>
              ) : (
                ''
              )}
            </Grid>
            <Grid size={12}>
              {loginConfirm ? (
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
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </Grid>
            <Grid size={12}>
              <Button variant="contained" onClick={handleLogin} fullWidth>
                Entrar
              </Button>
            </Grid>
            <Grid size={12} display={'flex'} justifyContent={'center'}>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                Não tem uma conta?{' '}
                <Link style={{ color: 'black' }} to={'/sign-up'}>
                  Cadastre-se
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

export default Home;
