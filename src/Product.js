import React from 'react'
import products from './Products'
import './App.css';

const Product = () => {
  return (
    <div className='list-group'>
      {
        products.map((product, i) => {
          return (
            <div className='product' key={i}>
              <h3>{product.item}</h3>
              <p>£{product.price}</p>
            </div>

          )
        })
      }
    </div>
  )
}




export default Product;
