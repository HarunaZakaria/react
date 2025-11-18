import './App.css';
import Search from './Components/Search';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="hero background image" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hustle
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="texxt-white">{searchTerm}</h1>
      </div>
    </div>
  );
}

export default App;
