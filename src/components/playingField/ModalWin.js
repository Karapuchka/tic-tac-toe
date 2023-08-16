import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './playingFiend.scss';

function ModalWin({winner, namePlayers, setStart}){

    const [life, setLife] = useState(true);

    const onExitModal = ()=>{
        setLife(false);
        setStart(false);

        console.log(winner);
        console.log(namePlayers[0].role);
        console.log(namePlayers[1].role);
    }

    if(winner === 'Ничья'){
        return (
            <AnimatePresence >{ life &&
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7}} className={`modal`}>
    
                        <section className='modal__container modal__container--min-size'>
    
                            <header className='modal__header'>Ничья</header>
    
                            <footer className='modal__footer'>
                                <button onClick={()=> onExitModal()} type='button' className='modal__footer__btn-exit'>Выйти</button>
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
                                <button onClick={()=> onExitModal()} type='button' className='modal__footer__btn-exit'>Выйти</button>
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