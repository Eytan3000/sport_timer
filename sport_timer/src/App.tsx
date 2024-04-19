import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './App.css';

import sound_321go from './assets/3-2-1 done louder joined.mp3';

function App() {
  const [restart, setrestart] = useState(0);

  function play() {
    const audio = new Audio(sound_321go);
    audio.play();
  }

  function handleOnUpdate(sec: number) {
    sec === 3 && play();
  }
  return (
    <>
      <div onClick={() => setrestart((prev) => prev + 1)}>
        <CountdownCircleTimer
          // onComplete={() => {
          //   // do your stuff here
          //   return { shouldRepeat: true, delay: 1.5 }; // repeat animation in 1.5 seconds
          // }}
          key={restart}
          isPlaying
          duration={60}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          onUpdate={handleOnUpdate}>
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </>
  );
}

export default App;
