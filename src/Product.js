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
              <img src='product.image'/>
              <h3>{product.name}</h3>
              <p>£{product.price}</p>
              <button>See more</button>
            </div>

          )
        })
      }
    </div>
  )
}




export default Product;
