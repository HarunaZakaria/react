import './App.css';
import Test from './Test';
import Image from './ImageTest';
import List from './Lists';
import CurrentTime from './CurrentTime';
import multipleFunc, { add, subtract } from './multipleFunc';

function App() {
  return (
    <>
      {/* <Image />
      <Test />
      <List /> */}
      <header>
        {/* <CurrentTime /> */}
        <p>{multipleFunc()}</p>
        <p>{add()}</p>
        <p>{subtract()}</p>
      </header>
    </>
  );
}

export default App;
