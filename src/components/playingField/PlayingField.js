import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import PlayingItem from './PlayingItem';
import ModalRole from './ModalRole';

import './playingFiend.scss';

function PlayingFiend({numberPlayers, namePlayers, setStart}) {

    const [role, setRole] = useState(['X', 'O']);
    const [playerRole, setPlayerRole] = useState('circle');
    const [arrayItems, setArrayItems] = useState([
        '', '', '', 
        '', '', '', 
        '', '', '',
    ]);
    const [life, setLife] = useState(true);

    if(numberPlayers === 1){
        return (
           <AnimatePresence>{ life && 
                <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .7}} className='playing container'>
            
                    <ModalRole setStart={setStart} setRole={setRole}/>

                    <header className='playing__header'>

                        <div className='playing__header__info'>
                            <p className='playing__header__name-player'>{namePlayers}</p>
                            <p className='playing__header__role'>Роль: {role[0]}</p>
                        </div>

                        <div className='playing__header__info'>
                            <p className='playing__header__name-player'>ИИ</p>
                            <p className='playing__header__role'>Роль: {role[1]}</p>
                        </div>
                    
                    </header>

                    <main className='playing__main'>
                        <h1 className='playing__main__queue'>Ход {((playerRole === 'cross' && role[0] === 'X') || (playerRole === 'circle' && role[0] === 'O')) ? namePlayers : 'ИИ'}</h1>
                        <ul className='playing__main__list'>
                            {arrayItems.map((item, index) => <PlayingItem indexItem={index} arrayItems={arrayItems} setRole={setArrayItems} role={item} key={index} playerRole={playerRole}/>)}
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

    }
}

export default PlayingFiend;