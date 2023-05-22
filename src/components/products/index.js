import { Container, Grid } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material/styles';
import { products } from '../../data';
import React from 'react';

const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const rendersProducts = products.map((product) => (
    <Grid item key={product?.id} display="flex" flexDirection={'column'} alignItems="center"></Grid>
  ));
  return (
    <Container>
      <Grid container justifyContent={'center'} sx={{ margin: '20px 4px 10px 4px' }}></Grid>
    </Container>
  );
};

export default Products;
