import React from 'react';
import DivisionStanding from './DivisionStanding';

function LeagueStanding({east, central, west}) {
    return (
        <div style={{display: `flex`}}>
            <DivisionStanding data={east}/>
            <div style={{margin: `10px`}}></div>
            <DivisionStanding data={central}/>
            <div style={{margin: `10px`}}></div>
            <DivisionStanding data={west}/>
        </div>
    )
}

export default LeagueStanding;