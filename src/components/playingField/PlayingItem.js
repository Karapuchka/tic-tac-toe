import { useState } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

import clickSound from '../../resources/music/click-sound.mp3';
import errorSound from '../../resources/music/error-sound.mp3';

import './playingFiend.scss';

function PlayingItem({setRole, role, playerRole, indexItem, fild, setPlayerRole, onValidWin}){

    const [roleItem, setRoleItem] = useState(role);
    const [playClickSound] = useSound(clickSound);
    const [playErrorSound] = useSound(errorSound);

    const onChangeValue = ()=>{

        let newArray = Object.assign(fild);

        if(playerRole === 'cross'){

            newArray[indexItem] = 'X';

            setRole(newArray);

            setRoleItem('X');

            setPlayerRole('circle');

            onValidWin('X');


        } else if (playerRole === 'circle'){

            newArray[indexItem] = 'O';

            setRole(newArray);

            setRoleItem('O');

            setPlayerRole('cross');

            onValidWin('O');

        }

        playClickSound();
    }



    if(roleItem === 'O') {

        return (
            <li className='playing__main__item'>
                <motion.div whileTap={{opacity: 1}} onClick={()=> playErrorSound()} className='playing__main__item__border-error'></motion.div>
                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7}} className='playing__circle'></motion.span>
            </li>
        )

    } else if (roleItem === 'X'){

        return (
            <li className='playing__main__item'>
                <motion.div whileTap={{opacity: 1}} onClick={()=> playErrorSound()} className='playing__main__item__border-error'></motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7}}  className='playing__cross'>
                    <span className='playing__cross-left'></span>
                    <span className='playing__cross-right'></span>
                </motion.div>
            </li>
        )

    } else {

        return (
            <motion.li whileTap={{background: 'rgba($color: #000000, $alpha: .2)'}} onClick={()=> onChangeValue()} className='playing__main__item'></motion.li>
        )

    }
}

export default PlayingItem;