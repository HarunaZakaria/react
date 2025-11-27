import React, { useState } from 'react';

const Time = () => {
  const CurrentTime = new Date().toLocaleTimeString();

  setInterval(upDateTime,1000)
  const [time, setTime] = useState(CurrentTime);

  function upDateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div>
      <h1 className='time'>{time}</h1>
      <button onClick={upDateTime}>Get time</button>
    </div>
  );
};

export default Time;
