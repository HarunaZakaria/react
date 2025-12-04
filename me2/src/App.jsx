import './App.css';

const products = [
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

const items = products.map((product) => (
  <li
    key={product.id}
    style={{ color: product.isFruit ? 'magenta' : 'red' }}
  >
    {product.title}
  </li>
));

function App() {
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}

export default App;
