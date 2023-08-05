import { useState } from 'react';

import Mode from './components/mode/Mode';
import PlayingFiend from './components/playingField/PlayingField';

import './App.scss';

function App() {

  const [numberPlayers, setNumberPlayers] = useState(0);
  const [start, setStart] = useState(false);
  const [namePlayers, setNamePlayers] = useState(['Player']);

  if(start){
    return (
      <div className='wrapper'>
        <PlayingFiend numberPlayers={numberPlayers} namePlayers={namePlayers} setStart={setStart}/>
      </div>
    )
  } else {
    return (
      <div className='wrapper'>
        <Mode setNumberPlayers={setNumberPlayers} setNamePlayers={setNamePlayers} start={setStart}/>
      </div>
    )
  }
}

export default App;