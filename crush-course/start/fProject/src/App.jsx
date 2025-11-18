import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import { use } from 'react';
//props
const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState('false');
  useEffect(() => {
    console.log(`${title} has been ${hasLiked}`);
  }, [title, hasLiked]);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title} <br /> {count || null}
      </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '💙'}
      </button>
    </div>
  );
};
function App() {
  return (
    <div>
      <h1>Arrow component</h1>
      <Card title="Suit" />
      <Card title="How to get away with murder" />
      <Card title="Game of thrones" />
    </div>
  );
}

export default App;
