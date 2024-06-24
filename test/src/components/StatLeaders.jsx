import React from 'react';
import styles from './StatLeaders.module.css'

function formatLeader(player) {
    return (
        <tr>
            <td>{player[0]}</td>
            <td>{player[1]}</td>
            <td>{player[3]}</td>
        </tr>
    )
}

function StatLeaders({data, statName}) {
    return (
        <div className={styles.container}>
            <table>
                <tbody>
                    <td>Rank</td>
                    <td>Player</td>
                    <td>{statName}</td>
                </tbody>
                {data.map(formatLeader)}
            </table>
            
        </div>
    )
}

export default StatLeaders