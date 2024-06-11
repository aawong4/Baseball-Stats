import React from 'react';
import styles from './CurrentGame.module.css'
import teamLogos from './teamLogos'

function CurrentGame({data}) {
    return (
        <div className={styles.container}>
            <div className={styles.score}>
                <div className={styles.teamName}>
                    <img src={teamLogos[data.away_name]}/>
                    <p>{data.away_name.split(" ").pop()}</p>
                </div>
                <p>{`${data.away_score} - ${data.home_score}`}</p>
                <div className={styles.teamName}>
                    <img src={teamLogos[data.home_name]}/>
                    <p>{data.home_name.split(" ").pop()}</p>
                </div>
                    
            </div>
            
        </div>
    )
}

export default CurrentGame;