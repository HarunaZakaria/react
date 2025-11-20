import './App.css';
import Test from './Test';
import Image from './ImageTest';
import List from './Lists';
import CurrentTime from './CurrentTime';
// import multipleFunc, { add, subtract } from './multipleFunc';
//import * as calculate from './Calculator';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';
import Card from './Components/Card';
import Avator from './Components/Avator';
import contacts from './Components/Contacts';
import CreateCard from './Components/CreateCard';
import emojipedia from './Components/Emojipedia';

function App() {
  emojipedia.map(function (emoji) {
    const emojiMeans = emoji.meaning;
    console.log(emojiMeans.substring(0, 50));
  });
  return (
    <>
      {/* <Image />
      <Test />
      <List /> */}
      <header>
        {/* <CurrentTime /> */}
        {/* <p>{multipleFunc()}</p>
        <p>{add()}</p>
        <p>{subtract()}</p> */}

        {/* <ul>
          <li>{calculate.add(4, 9)}</li>
          <li>{calculate.multiply(4, 9)}</li>
          <li>{calculate.subtract(4, 9)}</li>
          <li>{calculate.divide(4, 9)}</li>
        </ul> */}
        <Header />
      </header>
      <main className="main">
        <Note />
        {/* Card components here */}
        <Avator img="./Haruna.png" />
        {/* <div className="card-container">
          <Card
          name="Haruna"
          phone="+233545771497"
          email="Harunzy55@gmail.com"
          img="./Profile.png"
        />
        <Card
          name="Jalid"
          phone="+233597929097"
          email="Jalid55@gmail.com"
          img="./jalid.jpeg"
        />
        </div> */}
        <div className="card-container">{contacts.map(CreateCard)}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
