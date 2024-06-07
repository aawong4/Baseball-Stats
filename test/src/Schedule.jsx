import React from 'react';

function game_data(game) {
    return (
        <p key={game.game_id}>{game.summary.substring(13)}</p> //substring to cut off leading date
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