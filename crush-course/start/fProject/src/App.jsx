// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
//props
const Card = ({title}) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};
function App() {
  return (
    <div>
      <h1>Arrow component</h1>
      <Card title='Suit'/>
      <Card title='How to get away with murder'/>
      <Card title='Game of thrones'/>
    </div>
  );
}

export default App;
