import { Typography } from '@mui/material';
import { ProductMetaWrapper } from '../../styles/products';

import React from 'react';

const ProductMeta = ({ product, matches }) => {
  return (
    <ProductMetaWrapper>
      <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2}>
        {product.name}
      </Typography>
      <Typography variant={matches ? 'caption' : 'body1'}>${product.price}</Typography>
    </ProductMetaWrapper>
  );
};

export default ProductMeta;
