import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';

import clickSound from '../../resources/music/click-sound.mp3';
import './playingFiend.scss';

function ModalWin({winner, namePlayers, setStart}){

    const [playClickSound] = useSound(clickSound);

    const [life, setLife] = useState(true);

    const onExitModal = ()=>{
        setLife(false);
        setStart(false);
        playClickSound();
    }

    const onReplay = ()=> {
        setLife(false);
        setStart(false);
        playClickSound();

        setTimeout(()=>{
            setStart(true);
        }, 1);
    }

    if(winner === 'Ничья'){
        return (
            <AnimatePresence >{ life &&
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7}} className={`modal`}>
    
                        <section className='modal__container modal__container--min-size'>
    
                            <header className='modal__header'>Ничья</header>

                            <main classNmae='modal__main'>
                            </main>
    
                            <footer className='modal__footer'>
                                <motion.button whileHover={{color: 'red'}} onClick={()=> onReplay()} type='button' className='modal__footer__btn'>Переиграть?</motion.button>
                                <motion.button whileHover={{color: 'red'}} onClick={()=> onExitModal()} type='button' className='modal__footer__btn'>Выйти</motion.button>
                            </footer>
    
                        </section>
    
                    </motion.div>
                }
            </AnimatePresence>
        )
    } else if(winner){
        return (
            <AnimatePresence >{ life &&
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7}} className={`modal`}>
    
                        <section className='modal__container modal__container--min-size'>
    
                            <header className='modal__header'>Победа</header>

                            <main className='modal__main'>
                                <p className='modal__main__text'>
                                    {winner === namePlayers[0].role ? `${namePlayers[0].name}` : `${namePlayers[1].name}`}
                                </p>
                            </main>
    
                            <footer className='modal__footer'>
                                <motion.button whileHover={{color: 'red'}} onClick={()=> onReplay()} type='button' className='modal__footer__btn'>Переиграть?</motion.button>
                                <motion.button whileHover={{color: 'red'}} onClick={()=> onExitModal()} type='button' className='modal__footer__btn'>Выйти</motion.button>
                            </footer>
    
                        </section>
    
                    </motion.div>
                }
            </AnimatePresence>
        )
    } else {
        return null;
    }

   
}

export default ModalWin;