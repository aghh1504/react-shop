import React, { Component } from 'react';
import './App.css';
import products from './Products'
import Product from './Product'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Product />
      </div>
    );
  }
}

export default App;
