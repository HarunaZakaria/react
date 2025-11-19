import './App.css';
import Search from './Components/Search';
import { useEffect, useState } from 'react';

const API_BASED_URL = 'http://www.omdbapi.com/';

const API_KEYS = import.meta.env.VITE_TMDB_AP_KEYS;

const API_OPTIONS = {
  methoth: 'POST',
  Headers: {
    accept: 'application/json',
    Authorisation: `bearer ${API_KEYS}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchMovies = async () => {
    try {
      const endpoint = API_BASED_URL;
      const response = await fetch(endpoint, API_OPTIONS);

      // Correct condition
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
       console.error(`error fetching movies: ${error}`);
      setErrorMessage(`Error Fetching Movies. Please Try Again`);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
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
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="texxt-white">{searchTerm}</h1>
        </header>
        <section>
          <h2>All Movies</h2>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
      </div>
    </div>
  );
}

export default App;
