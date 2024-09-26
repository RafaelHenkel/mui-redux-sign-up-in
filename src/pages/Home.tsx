import { Button, Grid2 as Grid, Input, Typography } from '@mui/material';
import PageDefault from '../config/layout/PageDefault';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/models/ProductsSlice';
import { useState } from 'react';

function Home() {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(addProduct({ name, price }));
    setName('');
    setPrice('');
  }

  return (
    <>
      <PageDefault>
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
      </PageDefault>
    </>
  );
}

export default Home;
