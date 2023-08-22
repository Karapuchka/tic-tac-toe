import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';

import clickSound from '../../resources/music/click-sound.mp3';
import './playingFiend.scss';

function ModalRole({setStart, setRole, setNamePlayers, namePlayers}){

    const [playClickSound] = useSound(clickSound);

    const [life, setLife] = useState(true);

    const onExitModal = ()=>{
        setLife(false);
        setStart(false);
        playClickSound();
    }

    const onAddRole = (value)=> {
        setRole(value);
        setLife(false);
        
        let newObj = Object.assign(namePlayers);

        newObj[0].role = value[0];
        newObj[1].role = value[1];
        setNamePlayers(newObj);
        playClickSound();
    }

    return (
        <AnimatePresence >{ life &&
                <div className='modal'>

                    <section className='modal__container'>

                        <header className='modal__header'>{`Игрок ${namePlayers[0].name} выбирает роль`}</header>

                        <main className='modal__main'>

                            <div className='modal__main__btn'>

                                <motion.div onClick={()=> onAddRole(['X', 'O'])} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7}}  className='modal__main__cross'>
                                    <span className='modal__main__cross-left'></span>
                                    <span className='modal__main__cross-right'></span>
                                </motion.div>

                            </div>

                            <div className='modal__main__btn'>
                                <div onClick={()=> onAddRole(['O', 'X'])} className='modal__main__btn__circle'></div>
                            </div>

                        </main>

                        <footer className='modal__footer'>
                            <motion.button whileHover={{color: 'red'}} onClick={()=> onExitModal()} type='button' className='modal__footer__btn'>Выйти</motion.button>
                        </footer>

                    </section>

                </div>
            }
        </AnimatePresence>
    )
}

export default ModalRole;