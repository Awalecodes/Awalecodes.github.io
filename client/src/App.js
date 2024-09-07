import './App.css';
import { Grid } from '@mui/material';
import { Product } from './Product';

export const App = () => {
  const products = [
    {
      id: 1,
      name: 'Shave',
      price: 10
    },
    {
      id: 2,
      name: 'Haircut',
      price: 20
    },
    {
      id: 3,
      name: 'Shampoo',
      price: 5
    }
  ]
  
  return (
    <>
      <h1>Deer Barbers</h1>
      <p>
        Here is a barber shop thing.
      </p>
      <hr />
      <h2>Services</h2>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        
      </Grid>
    </>
  )
}
