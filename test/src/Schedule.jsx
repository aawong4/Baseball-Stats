import React from 'react';

function game_data(game) {
    return (
        <p key={game.game_id}>{game.summary}</p>
    );
}

function Schedule({ data }) {
    return (
        <div>{data.map(game_data)}</div>
    );
}

export default Schedule;