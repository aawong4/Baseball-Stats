import React from 'react';
import styles from './CurrentGame.module.css'
import teamLogos from './teamLogos'
import { useState, useEffect } from 'react';

function CurrentGame({data}) {
    const [gameStart, setGameStart] = useState(true);

    useEffect(() => {
        const gameStatus = data.summary.split(" ").pop();
        setGameStart(gameStatus === "(Pre-Game)" || gameStatus === "(Warmup)" || gameStatus === "(Scheduled)");
    }, [data]); // Dependency array ensures this effect runs only when `data` changes

    return (
        <div className={styles.container}>
            <div className={styles.score}>
                <div className={styles.teamName}>
                    <img src={teamLogos[data.away_name]}/>
                    <p>{data.away_name.split(" ").pop()}</p>
                </div>
                <p>{gameStart ? `${data.game_datetime.substring(11)}` : `${data.away_score} - ${data.home_score}`}</p>
                <div className={styles.teamName}>
                    <img src={teamLogos[data.home_name]}/>
                    <p>{data.home_name.split(" ").pop()}</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentGame;