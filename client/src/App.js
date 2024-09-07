import './App.css';
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { Product } from './Product';
import axios from 'axios';

export const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
      })
  }, []);

  return (
    <>
      <h1>Deer Barbers</h1>
      <p>
        Here is a barber shop thing.
      </p>
      <hr />
      <h2>Services</h2>
      {products === undefined ? (
        <p>Loading...</p>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      )}
    </>
  )
}
