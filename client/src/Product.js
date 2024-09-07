import {Grid} from '@mui/material';

export const Product = ({ product }) => {
  return (
    <Grid key={product.id} item xs={3}>
      <p>Maybe you'd like a {product.name}</p>
      <p>£{product.price}</p>
    </Grid>
  )
}