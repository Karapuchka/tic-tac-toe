import { useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import PropsType from 'prop-types';

function EnterNamePlayers({setNamePlayers, page, start}){

    const [life, setLife] = useState(true);
    const [namePlayerOne, setNamePlayerOne] = useState('Первый игрок');
    const [namePlayerTwo, setNamePlayerTwo] = useState('Второй игрок');

    const onChangeName = (value, player)=>{
        player(value);
    }

    const onEnterName = ()=>{

        if(page === 'player'){

            localStorage.setItem('numberPlayers', '1')
            localStorage.setItem('namePlayer', namePlayerOne);

            if(namePlayerOne === '') setNamePlayerOne('Первый игрок');

            setNamePlayers([namePlayerOne]);

        } else {

            localStorage.setItem('numberPlayers', '2')
            localStorage.setItem('namePlayerOne', namePlayerOne);
            localStorage.setItem('namePlayerTwo', namePlayerTwo);

            if(namePlayerOne === '') setNamePlayerOne('Первый игрок');
            if(namePlayerTwo === '') setNamePlayerTwo('Второй игрок');

            setNamePlayers([namePlayerOne, namePlayerTwo]);
            
        }

        setLife(false)

        start(true);
    }

    if(page === 'player'){
        return (
            <AnimatePresence> {life && 
                     <motion.section initial={{opacity: 0, y: 5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}} transition={{duration: 1}} className="mode container">
                     
                         <header className="mode__title">Укажите именя игрока</header>
     
                         <main className="mode__main">
                             
                             <div className="mode__main__icons mode__main__icons--margin-bottom">

                                 <div className="mode__main__icons__img">

                                    <svg width="151" height="213" viewBox="0 0 151 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="black" d="M70 98.1162H81C119.384 98.1162 150.5 129.232 150.5 167.616V211.51H0.5V167.616C0.5 129.232 31.6162 98.1162 70 98.1162Z" fill="white"/>
                                        <circle stroke="black" cx="77.0252" cy="43.4697" r="42.9697" fill="white"/>
                                    </svg>

                                 </div>

                             </div>
     
                             <form className="mode__main__form">
     
                                 <div className='mode__main__form__name-enter'> 
                                     <p className='mode__main__form__label-name'>Имя игрока:</p>
                                     <input onChange={(event)=> onChangeName(event.target.value, setNamePlayerOne)} className="mode__main__form__input" type="text" placeholder="Введите имя игрока"/>
                                 </div>
     
                                 <button onClick={()=> onEnterName()} className="mode__main__form__btn" type='button'>Начать игру</button>
     
                             </form>
     
                         </main>
     
                     </motion.section>
                 } 
            </AnimatePresence>
         )
    } else {
        return (
            <AnimatePresence> {life && 
                     <motion.section initial={{opacity: 0, y: 5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}} transition={{duration: 1}} className="mode container">
                     
                         <header className="mode__title">Укажите имена игроков</header>
     
                         <main className="mode__main">
                             
                             <div className="mode__main__icons mode__main__icons--margin-bottom">
                                 <div className="mode__main__icons__img">
                                     <svg width="254" height="213" viewBox="0 0 254 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path stroke="black" d="M70 98.1162H81C119.384 98.1162 150.5 129.232 150.5 167.616V211.51H0.5V167.616C0.5 129.232 31.6162 98.1162 70 98.1162Z" fill="white"/>
                                         <circle stroke="black" cx="77.0252" cy="43.4697" r="42.9697" fill="white"/>
                                         <path stroke="black" d="M103 167.616C103 128.956 134.34 97.6162 173 97.6162H184C222.66 97.6162 254 128.956 254 167.616V212.01H103V167.616Z" fill="#0085FF"/>
                                         <circle stroke="black" cx="180.025" cy="43.4697" r="43.4697" fill="#0084FF"/>
                                     </svg>
                                 </div>
                             </div>
     
                             <form className="mode__main__form">
     
                                 <div className='mode__main__form__name-enter'> 
                                     <p className='mode__main__form__label-name'>Имя первого игрока:</p>
                                     <input onChange={(event)=> onChangeName(event.target.value, setNamePlayerOne)} className="mode__main__form__input" type="text" placeholder="Введите имя игрока"/>
                                 </div>
     
                                 <div className='mode__main__form__name-enter'> 
                                     <p className='mode__main__form__label-name'>Имя второго игрока:</p>
                                     <input onChange={(event)=> onChangeName(event.target.value, setNamePlayerTwo)} className="mode__main__form__input" type="text" placeholder="Введите имя игрока"/>
                                 </div>
     
                                 <button onClick={()=> onEnterName()} className="mode__main__form__btn" type='button'>Начать игру</button>
     
                             </form>
     
                         </main>
     
                     </motion.section>
                 } 
            </AnimatePresence>
         )
    }
}

EnterNamePlayers.propsType = {
    setNamePlayers: PropsType.func,
    page: PropsType.string,
    start: PropsType.func,
}

EnterNamePlayers.defaultProps = {
    setNamePlayers: ()=> console.error('Error: Не передана функция setNamePlayers в компонете EnterNamePlayers'),
    page: 'Player',
    start: ()=> console.error('Error: Не передана функция start в компонете EnterNamePlayers'),
}

export default EnterNamePlayers;