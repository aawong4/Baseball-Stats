import React from 'react';
import styles from './DivisionStanding.module.css'

function getInfo(team) {
    return (
        <tr>
            <td>{team.name}</td>
            <td>{`W: ${team.w}`}</td>
            <td>{`L: ${team.l}`}</td>
            <td>{`GB: ${team.gb}`}</td>
        </tr>
    )
}

function DivisionStanding({data}) {
    let teams = data.teams
    return (
        <div className={styles.container}>
            <table>
                <tr>
                    <th>{data.div_name.split(" ").pop()}</th>
                </tr>
                {/* Defines a callback function that returns each team name in the array */}
                {teams.map(getInfo)}
            </table>
        </div>
    )
}

export default DivisionStanding;