import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import PlayingItem from './PlayingItem';
import ModalRole from './ModalRole';
import ModalWin from './ModalWin';

import './playingFiend.scss';

function PlayingFiend({numberPlayers, namePlayers, setStart, setNamePlayers}) {

    const [role, setRole] = useState(['X', 'O']);
    const [playerRole, setPlayerRole] = useState('cross');
    const [fild, setFild] = useState([
        '', '', '', 
        '', '', '', 
        '', '', '',
    ]);
    const [winner, setWinner] = useState(false);

    const onValidWin = (value)=> {

        if((fild[0] === value && fild[1] === value && fild[2] === value) ||
           (fild[0] === value && fild[3] === value && fild[6] === value) || 
           (fild[0] === value && fild[4] === value && fild[8] === value) ||
           (fild[1] === value && fild[4] === value && fild[7] === value) ||
           (fild[2] === value && fild[4] === value && fild[6] === value) ||
           (fild[2] === value && fild[5] === value && fild[8] === value) ||
           (fild[3] === value && fild[4] === value && fild[5] === value) ||
           (fild[6] === value && fild[7] === value && fild[8] === value)){


            setWinner(value);    
        } else if (fild[0] != '' && fild[1] != '' && fild[2] != '' &&
                   fild[0] != '' && fild[3] != '' && fild[6] != '' && 
                   fild[0] != '' && fild[4] != '' && fild[8] != '' &&
                   fild[1] != '' && fild[4] != '' && fild[7] != '' &&
                   fild[2] != '' && fild[4] != '' && fild[6] != '' &&
                   fild[2] != '' && fild[5] != '' && fild[8] != '' &&
                   fild[3] != '' && fild[4] != '' && fild[5] != '' &&
                   fild[6] != '' && fild[7] != '' && fild[8] != ''){
            setWinner('Ничья'); 
        }
    }

    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .7}} className='playing container'>
    
            <ModalRole setStart={setStart} setRole={setRole} numberPlayers={numberPlayers} namePlayers={namePlayers} setNamePlayers={setNamePlayers}/>
            <ModalWin winner={winner} numberPlayers={numberPlayers} namePlayers={namePlayers} setStart={setStart}/>
        
            <header className='playing__header'>

                <div className='playing__header__info'>
                    <p className='playing__header__name-player'>{namePlayers[0].name}</p>
                    <p className='playing__header__role'>Роль: {role[0]}</p>
                </div>

                <div className='playing__header__info'>
                    <p className='playing__header__name-player'>{namePlayers[1].name}</p>
                    <p className='playing__header__role'>Роль: {role[1]}</p>
                </div>
            
            </header>

            <main className='playing__main'>
                <h1 className='playing__main__queue'>Ход {((playerRole === 'cross' && role[0] === 'X') || (playerRole === 'circle' && role[0] === 'O')) ? namePlayers[0].name : namePlayers[1].name}</h1>
                <ul className='playing__main__list'>
                    {fild.map((item, index) => <PlayingItem indexItem={index} fild={fild} setRole={setFild} role={item} key={index} playerRole={playerRole} setPlayerRole={setPlayerRole} onValidWin={onValidWin}/>)}
                </ul>
            </main>

            <footer className='playing__footer'>
                <button onClick={()=> setStart(false)} type={'button'} className='playing__footer__exit'>Выход</button>
            </footer>

        </motion.section>
    )
}

export default PlayingFiend;