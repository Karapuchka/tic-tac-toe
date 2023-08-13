import { useState } from 'react';

import Mode from './components/mode/Mode';
import PlayingFiend from './components/playingField/PlayingField';

import './App.scss';

function App() {

  const [numberPlayers, setNumberPlayers] = useState(0);
  const [start, setStart] = useState(false);
  const [namePlayers, setNamePlayers] = useState([{name: 'Первый игрок', role: ''}, {name: 'Второй игрок', role: ''}]);

  if(start){
    return (
      <div className='wrapper'>
        <PlayingFiend numberPlayers={numberPlayers} namePlayers={namePlayers} setStart={setStart} setNamePlayers={setNamePlayers}/>
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