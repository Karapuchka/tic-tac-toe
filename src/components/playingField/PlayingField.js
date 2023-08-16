import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import PlayingItem from './PlayingItem';
import ModalRole from './ModalRole';
import ModalWin from './ModalWin';

import './playingFiend.scss';

function PlayingFiend({numberPlayers, namePlayers, setStart, setNamePlayers}) {

    const [role, setRole] = useState(['X', 'O']);
    const [playerRole, setPlayerRole] = useState('cross');
    const [arrayItems, setArrayItems] = useState([
        '', '', '', 
        '', '', '', 
        '', '', '',
    ]);
    const [life, setLife] = useState(true);
    const [winner, setWinner] = useState(false);

    const onValidWin = (value)=> {

        if((arrayItems[0] === value && arrayItems[1] === value && arrayItems[2] === value) ||
           (arrayItems[0] === value && arrayItems[3] === value && arrayItems[6] === value) || 
           (arrayItems[0] === value && arrayItems[4] === value && arrayItems[8] === value) ||
           (arrayItems[1] === value && arrayItems[4] === value && arrayItems[7] === value) ||
           (arrayItems[2] === value && arrayItems[4] === value && arrayItems[6] === value) ||
           (arrayItems[2] === value && arrayItems[5] === value && arrayItems[8] === value) ||
           (arrayItems[3] === value && arrayItems[4] === value && arrayItems[5] === value) ||
           (arrayItems[6] === value && arrayItems[7] === value && arrayItems[8] === value)){


            setWinner(value);    
        } else if (arrayItems[0] != '' && arrayItems[1] != '' && arrayItems[2] != '' &&
                   arrayItems[0] != '' && arrayItems[3] != '' && arrayItems[6] != '' && 
                   arrayItems[0] != '' && arrayItems[4] != '' && arrayItems[8] != '' &&
                   arrayItems[1] != '' && arrayItems[4] != '' && arrayItems[7] != '' &&
                   arrayItems[2] != '' && arrayItems[4] != '' && arrayItems[6] != '' &&
                   arrayItems[2] != '' && arrayItems[5] != '' && arrayItems[8] != '' &&
                   arrayItems[3] != '' && arrayItems[4] != '' && arrayItems[5] != '' &&
                   arrayItems[6] != '' && arrayItems[7] != '' && arrayItems[8] != ''){
            setWinner('Ничья'); 
        }
        console.log(arrayItems);
    }

    if(numberPlayers === 1){
        return (
            <AnimatePresence>{ life && 
                <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .7}} className='playing container'>
            
                    <ModalRole setStart={setStart} setRole={setRole} numberPlayers={numberPlayers} namePlayers={namePlayers} setNamePlayers={setNamePlayers}/>
                    <ModalWin winner={winner} numberPlayers={numberPlayers} namePlayers={namePlayers} setStart={setStart}/>
                
                    <header className='playing__header'>

                        <div className='playing__header__info'>
                            <p className='playing__header__name-player'>{namePlayers[0].name}</p>
                            <p className='playing__header__role'>Роль: {role[0]}</p>
                        </div>

                        <div className='playing__header__info'>
                            <p className='playing__header__name-player'>ИИ</p>
                            <p className='playing__header__role'>Роль: {role[1]}</p>
                        </div>
                    
                    </header>

                    <main className='playing__main'>
                        <h1 className='playing__main__queue'>Ход {((playerRole === 'cross' && role[0] === 'X') || (playerRole === 'circle' && role[0] === 'O')) ? namePlayers[0].name : 'ИИ'}</h1>
                        <ul className='playing__main__list'>
                            {arrayItems.map((item, index) => <PlayingItem indexItem={index} arrayItems={arrayItems} setRole={setArrayItems} role={item} key={index} playerRole={playerRole} setPlayerRole={setPlayerRole} onValidWin={onValidWin}/>)}
                        </ul>
                    </main>

                    <footer className='playing__footer'>
                        <button onClick={()=> setStart(false)} type={'button'} className='playing__footer__exit'>Выход</button>
                    </footer>

                </motion.section>
            }
            </AnimatePresence>
        )
    } else {
        return (
            <AnimatePresence>{ life && 
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
                            {arrayItems.map((item, index) => <PlayingItem indexItem={index} arrayItems={arrayItems} setRole={setArrayItems} role={item} key={index} playerRole={playerRole} setPlayerRole={setPlayerRole} onValidWin={onValidWin}/>)}
                        </ul>
                    </main>

                    <footer className='playing__footer'>
                        <button onClick={()=> setStart(false)} type={'button'} className='playing__footer__exit'>Выход</button>
                    </footer>

                </motion.section>
            }
            </AnimatePresence>
        )
    }
}

export default PlayingFiend;