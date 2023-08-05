import { useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import PropsType from 'prop-types';

function NuberOfPlayers({openPage}){

    const [life, setLife] = useState(true);
    const [fillTwoPlayers, setFillTwoPlayers] = useState(['#0084FF', 'white']);
    const [fillOnePlayer, setFillOnePlayer] = useState('white');

    const onOpenPage = (numberPlayer, page)=>{
        setLife(false);
        openPage(numberPlayer, page);
    }

    return (
        <AnimatePresence> {life && 
                    <motion.section initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}} transition={{duration: 1}}  className="mode container">

                    <header className="mode__title">Выберите режим игры</header>

                    <main className='mode__main mode__main--position-childrean'>

                        <div className="mode__main__icons">

                            <div onClick={()=> onOpenPage(1, 'player')} onPointerOver={()=> setFillOnePlayer('#0084FF')} onPointerOut={()=> setFillOnePlayer('white')} className="mode__main__icons__img">

                                <svg width="151" height="213" viewBox="0 0 151 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="black" d="M70 98.1162H81C119.384 98.1162 150.5 129.232 150.5 167.616V211.51H0.5V167.616C0.5 129.232 31.6162 98.1162 70 98.1162Z" fill={fillOnePlayer}/>
                                    <circle cx="77.0252" cy="43.4697" r="42.9697" stroke="black" fill={fillOnePlayer}/>
                                </svg>

                            </div>

                            <p className='mode__main__icons__label'>Один игрок</p>
                        </div>

                        <div className="mode__main__icons">

                            <div onClick={()=> onOpenPage(2, 'players')} onPointerOver={()=> setFillTwoPlayers(['white', '#0084FF'])} onPointerOut={()=> setFillTwoPlayers(['#0084FF', 'white'])} className="mode__main__icons__img">

                                <svg width="254" height="213" viewBox="0 0 254 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path animate={{fill: fillTwoPlayers[1]}} stroke="black" d="M70 98.1162H81C119.384 98.1162 150.5 129.232 150.5 167.616V211.51H0.5V167.616C0.5 129.232 31.6162 98.1162 70 98.1162Z"/>
                                    <motion.circle animate={{fill: fillTwoPlayers[1]}} stroke="black" cx="77.0252" cy="43.4697" r="42.9697"/>
                                    <motion.path animate={{fill: fillTwoPlayers[0]}} stroke="black" d="M103 167.616C103 128.956 134.34 97.6162 173 97.6162H184C222.66 97.6162 254 128.956 254 167.616V212.01H103V167.616Z"/>
                                    <motion.circle animate={{fill: fillTwoPlayers[0]}} stroke="black" cx="180.025" cy="43.4697" r="43.4697"/>
                                </svg>

                            </div>

                            <p className='mode__main__icons__label'>Два игрока</p>
                        </div>

                    </main>

                </motion.section>
            }
        </AnimatePresence>

    )
}

NuberOfPlayers.propsType = {
    openPage: PropsType.func,
}

NuberOfPlayers.defaultProps = {
    openPage: ()=> console.error('Error: Не передана функция openPage в компонете NuberOfPlayers'),
}

export default NuberOfPlayers;