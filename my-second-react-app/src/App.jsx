import './App.css';
import Test from './Test';
import Image from './ImageTest';
import List from './Lists';
import CurrentTime from './CurrentTime';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Time from './Components/Time';
import Login from './Components/Login';

function App() {
  return (
    <>
    <header>
    <Header />
    </header>
      <main>
     <Time />
      <Login />
      </main>

     

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
