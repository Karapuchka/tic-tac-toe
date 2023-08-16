import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './playingFiend.scss';

function ModalRole({setStart, setRole, setNamePlayers, numberPlayers, namePlayers}){

    const [life, setLife] = useState(true);

    const onExitModal = ()=>{
        setLife(false);
        setStart(false);
    }

    const onAddRole = (value)=> {
        setRole(value);
        setLife(false);
        
        let newObj = Object.assign(namePlayers);

        newObj[0].role = value[0];
        newObj[1].role = value[1];
        setNamePlayers(newObj);
    }

    return (
        <AnimatePresence >{ life &&
                <div className='modal'>

                    <section className='modal__container'>

                        <header className='modal__header'>{numberPlayers === 1 ? 'Выберите роль' : `Игрок ${namePlayers[0].name}`}</header>

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
                            <button onClick={()=> onExitModal()} type='button' className='modal__footer__btn-exit'>Выйти</button>
                        </footer>

                    </section>

                </div>
            }
        </AnimatePresence>
    )
}

export default ModalRole;