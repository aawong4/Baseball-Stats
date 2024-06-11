import React from 'react';
import styles from './CurrentGame.module.css'
import teamLogos from './teamLogos'

function CurrentGame({data}) {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.scores}>
                    <img src={teamLogos[data.away_name]}/>
                    <p>{data.away_name.split(" ").pop()}</p>
                    <p>{data.away_score}</p>
                </div>
                <div className={styles.scores}>
                    <img src={teamLogos[data.home_name]}/>
                    <p>{data.home_name.split(" ").pop()}</p>
                    <p>{data.home_score}</p>
                </div>
                
            </div>
        </div>
    )
}

export default CurrentGame;