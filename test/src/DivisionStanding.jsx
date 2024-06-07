import React from 'react';
import styles from './DivisionStanding.module.css'

function getInfo(team) {
    return (
        <tr key={team.name}>
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
                <thead>
                    <tr><th>{data.div_name.split(" ").pop()}</th></tr>
                </thead>
                {/* Defines a callback function that returns each team name in the array */}
                <tbody>{teams.map(getInfo)}</tbody>
            </table>
        </div>
    )
}

export default DivisionStanding;