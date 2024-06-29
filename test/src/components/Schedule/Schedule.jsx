import React from 'react';
import CurrentGame from './CurrentGame'

function game_data(game) {
    return (
        <CurrentGame data={game}></CurrentGame>
    );
}

function Schedule({ data }) {
    return (
        <div>
            <h1>Today's Games</h1>
            <div>{data.map(game_data)}</div>
        </div>
    );
}

export default Schedule;