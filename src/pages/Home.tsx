import { Button, Container, Grid2 as Grid, Input, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addProduct, addProductToCart } from '../store/models/ProductsSlice';
import { useState } from 'react';
import ResponsiveAppBar from '../components/AppBar';
import { useAppSelector } from '../store/hooks';

function Home() {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const selector = useAppSelector(state => state.products);
  const dispatch = useDispatch();
  function handleAddProduct(item: any) {
    dispatch(addProductToCart(item));
  }

  function handleSubmit() {
    dispatch(addProduct({ name, price }));
    setName('');
    setPrice('');
  }

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Grid container spacing={4}>
          <Grid size={12} display={'flex'} justifyContent={'center'}>
            <Typography variant="h3">Adicionar Produtos</Typography>
          </Grid>
          <Grid size={12} display={'flex'} justifyContent={'center'}>
            <Input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
          </Grid>
          <Grid size={12} display={'flex'} justifyContent={'center'}>
            <Input placeholder="Preço" value={price} onChange={e => setPrice(e.target.value)} />
          </Grid>
          <Grid size={12} display={'flex'} justifyContent={'center'}>
            <Button variant="text" color="inherit" onClick={handleSubmit}>
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
