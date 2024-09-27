import { Box, Button, Container, Typography } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import ResponsiveAppBar from '../components/AppBar';
import { useDispatch } from 'react-redux';
import { addProductToCart, delProductToCart } from '../store/models/ProductsSlice';

function Product() {
  const selector = useAppSelector(state => state.products);
  const dispatch = useDispatch();
  const getTotalPrice = selector.reduce((acc, product) => {
    return acc + product.price * product.amount;
  }, 0);

  function handleAddProduct(item: any) {
    dispatch(addProductToCart(item));
  }
  function handleDelProduct(item: any) {
    dispatch(delProductToCart(item));
  }
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box>
          {selector.map(product => (
            <Box key={product.id}>
              <Typography variant="subtitle1">Nome: {product.name}</Typography>
              <Typography variant="body1">Preço: R$ {product.price},00</Typography>
              <Typography variant="body1">Quantidade: {product.amount}</Typography>
              <Button variant="text" size="small" color="inherit" onClick={() => handleAddProduct(product)}>
                Adicionar
              </Button>
              <Button variant="text" size="small" color="inherit" onClick={() => handleDelProduct(product)}>
                remover
              </Button>
            </Box>
          ))}
          <Typography variant="h6">Preço total: R$ {getTotalPrice},00</Typography>
        </Box>
      </Container>
    </>
  );
}

export default Product;
