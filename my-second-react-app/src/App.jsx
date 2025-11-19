import './App.css';
import Test from './Test';
import Image from './ImageTest';
import List from './Lists';
import CurrentTime from './CurrentTime';
// import multipleFunc, { add, subtract } from './multipleFunc';
import * as calculate from './Calculator';

function App() {
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

        <ul>
          <li>{calculate.add(4, 9)}</li>
          <li>{calculate.multiply(4, 9)}</li>
          <li>{calculate.subtract(4, 9)}</li>
          <li>{calculate.divide(4, 9)}</li>
        </ul>
      </header>
    </>
  );
}

export default App;
