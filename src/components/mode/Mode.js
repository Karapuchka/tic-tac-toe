import { useState } from 'react';
import PropsType from 'prop-types';

import EnterNamePlayers from './EnterNamePlayers';

import './mode.scss';

function Mode({setNumberPlayers, setNamePlayers, start}){
    const [page, setPage] = useState('number');

    return (
        <EnterNamePlayers setNamePlayers={setNamePlayers} page={page} start={start}/>
    )
}

Mode.propsType = {
    setNumberPlayers: PropsType.func,
    setNamePlayers: PropsType.func,
    start: PropsType.func,
}

Mode.defaultProps = {
    setNumberPlayers: ()=> console.error('Error: Не передана функция setNumberPlayers в компонете Mode'),
    setNamePlayers:  ()=> console.error('Error: Не передана функция setNamePlayers в компонете Mode'),
    start:  ()=> console.error('Error: Не передана функция start в компонете Mode'),
}

export default Mode;