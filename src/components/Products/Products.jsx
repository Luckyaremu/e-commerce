import React from 'react';
import  { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {id: 1, name: "Shoes", description: "Running shoes", price: "$10", image: "https://res.cloudinary.com/aremucamp/image/upload/v1608349192/pexels-cottonbro-3998429.jpg"},
  {id: 2, name: "Mackbook", description: "Apple macbook", price: "$10", image: "https://res.cloudinary.com/aremucamp/image/upload/v1608348910/pexels-ololade-masud-4889531.jpg" },
]

const Products = () => {
  return (
    <main>
    <Grid container justify="center" spacing={4}>
        {products.map((product)=>(
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product}/>
          </Grid>
        ))}
    </Grid>
    </main>
  );
}

export default Products
