import './App.css';
import Test from './Test';
import Image from './ImageTest';
import List from './Lists';
import CurrentTime from './CurrentTime';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Time from './Components/Time';
import animals from './Components/Data';

function App() {
  const [dog, sheep, cat] = animals;
  console.log(cat);
  const { name, sound } = dog;
  console.log(sound + " "+ name);
  return (
    <>
      <Header />

      <Time />

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
