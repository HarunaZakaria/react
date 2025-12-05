import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
//import products from './Components/Products';

const productss = [
  {
    title: 'Shoes',
    id: 1,
    isFruit: true,
  },
  {
    title: 'Cross',
    id: 2,
    isFruit: true,
  },
  {
    title: 'Sandals',
    id: 3,
    isFruit: false,
  },
  {
    title: 'Boots',
    id: 4,
    isFruit: false,
  },
  {
    title: 'Slippers',
    id: 5,
    isFruit: false,
  },
];

const items = productss.map((product) => (
  <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'red' }}>
    {product.title}
  </li>
));

//const sandals = products.map(product)

function App() {
  const [count, setCount] = useState(0);
  //handle a button click
  function Add() {
    setCount(count + 1);
  }
  function Subtract() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <ul>{items}</ul>

      <div>
        <Card />
      </div>
      <button onClick={Add}>Add</button>
      <button onClick={Subtract}>Subtract</button>
    </div>
  );
}

export default App;
