import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './playingFiend.scss';

function ModalRole({setStart, setRole}){

    const [life, setLife] = useState(true);

    const onExitModal = ()=>{
        setLife(false);
        setStart(false);
    }

    const onAddRole = (value)=> {
        setRole(value);
        setLife(false);
    }

    return (
        <AnimatePresence >{ life &&
                <div className='modal-role'>

                    <section className='modal-role__container'>

                        <header className='modal-role__header'>Выберите роль</header>

                        <main className='modal-role__main'>

                            <div className='modal-role__main__btn'>

                                <motion.div onClick={()=> onAddRole(['X', 'O'])} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7}}  className='modal-role__main__cross'>
                                    <span className='modal-role__main__cross-left'></span>
                                    <span className='modal-role__main__cross-right'></span>
                                </motion.div>

                            </div>

                            <div className='modal-role__main__btn'>
                                <div onClick={()=> onAddRole(['O', 'X'])} className='modal-role__main__btn__circle'></div>
                            </div>

                        </main>

                        <footer className='modal-role__footer'>
                            <button onClick={()=> onExitModal()} type='button' className='modal-role__footer__btn-exit'>Выйти</button>
                        </footer>

                    </section>

                </div>
            }
        </AnimatePresence>
    )
}

export default ModalRole;