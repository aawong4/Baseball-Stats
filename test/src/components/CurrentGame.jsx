import React from 'react';
import styles from './CurrentGame.module.css'
import teamLogos from '../teamLogos'
import { useState, useEffect } from 'react';

function convertTime(time) {
    let hour = time.substring(0, 2);
    if (hour >= 12) {
        return (
            <p>{`${hour - 19}:${time.substring(3,5)}PM(PDT)`}</p>
        )
    }
    else {
        return (
            <p>{`${Number(hour) + 5}:${time.substring(3,5)}PM(PDT)`}</p>
        )
    }
    
}

function getGameState(num, data) {
    if (num == 2) {
        return (
            <div>
                <p className={styles.scoreAndState}>{data.away_score} - {data.home_score}</p>
                <p className={styles.scoreAndState}>Final</p>
            </div>
        )
    }
    else if (num == 1) {
        return (
            <div>
                <p className={styles.scoreAndState}>{data.away_score} - {data.home_score}</p>
                <p className={styles.scoreAndState}>{data.inning_state} {data.current_inning}</p>
            </div>
        )
    }
    else {
        return (
            <p>{convertTime(data.game_datetime.substring(11))}</p>
        )
    }
}

function CurrentGame({data}) {
    const [gameStatus, setGameStatus] = useState(0)

    useEffect(() => {
        const gameStatus = data.summary.split(" ").pop();
        if (data.status === "Final" || data.status === "Game Over") {
            setGameStatus(2);
        }
        else if (data.status === "In Progress") {
            setGameStatus(1);
        }
    }, [data]); // Dependency array ensures this effect runs only when `data` changes

    return (
        <div className={styles.container}>
            <div className={styles.score}>
                <div className={styles.teamName}>
                    <img src={teamLogos[data.away_name]}/>
                    <p>{data.away_name.split(" ").pop()}</p>
                </div>
                <p>{getGameState(gameStatus, data)}</p>
                <div className={styles.teamName}>
                    <img src={teamLogos[data.home_name]}/>
                    <p>{data.home_name.split(" ").pop()}</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentGame;