import { useState } from 'react';
import { motion } from 'framer-motion';

import './playingFiend.scss';

function PlayingItem({setRole, role, playerRole, indexItem, arrayItems, setPlayerRole, onValidWin}){

    const [roleItem, setRoleItem] = useState(role);

    const onChangeValue = ()=>{

        let newArray = Object.assign(arrayItems);

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

        localStorage.setItem('gamePosition', arrayItems)
    }

    if(roleItem === 'O') {

        return (
            <li className='playing__main__item'>
                <motion.div whileTap={{opacity: 1}} transition={{duration: .2}} className='playing__main__item__border-error'></motion.div>
                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7}} className='playing__circle'></motion.span>
            </li>
        )

    } else if (roleItem === 'X'){

        return (
            <li className='playing__main__item'>
                <motion.div whileTap={{opacity: 1}} transition={{duration: .2}} className='playing__main__item__border-error'></motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7}}  className='playing__cross'>
                    <span className='playing__cross-left'></span>
                    <span className='playing__cross-right'></span>
                </motion.div>
            </li>
        )

    } else {

        return (
            <li onClick={()=> onChangeValue()} className='playing__main__item'></li>
        )

    }
}

export default PlayingItem;