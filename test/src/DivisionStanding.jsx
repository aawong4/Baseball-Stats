import React from 'react';
import styles from './DivisionStanding.module.css'
import teamShortHand from './teamShortHand';
import teamLogos from './teamLogos';

function getInfo(team) {
    return (
        <tr key={team.name}>
            <td>
                <img src={teamLogos[team.name]}></img>
                {teamShortHand[team.name]}
            </td>
            <td>{team.w}</td>
            <td>{team.l}</td>
            <td>{team.wp}</td>
            <td>{team.gb}</td>
        </tr>
    )
}

function DivisionStanding({data}) {
    let teams = data.teams
    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <tr><th>{data.div_name}</th></tr>
                </thead>
                <tbody>
                    <td>Team</td>
                    <td>W</td>
                    <td>L</td>
                    <td>%</td>
                    <td>GB</td>
                </tbody>
                {/* Defines a callback function that returns each team name in the array */}
                <tbody>{teams.map(getInfo)}</tbody>
            </table>
        </div>
    )
}

export default DivisionStanding;