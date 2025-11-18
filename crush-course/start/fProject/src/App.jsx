// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Card from './ReactHooks';
import Tail from './Tail';
// import { use } from 'react';
//props

function App() {
  return (
    <div>
      <h1>Arrow component</h1>
      <Card title="Suit" />
      <Card title="How to get away with murder" />
      <Card title="Game of thrones" />
      <Tail />
    </div>
  );
}

export default App;
