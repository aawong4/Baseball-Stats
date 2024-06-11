import React from 'react';
import DivisionStanding from './DivisionStanding';

function LeagueStanding({east, central, west}) {
    return (
        <div style={{display: `flex`}}>
            <DivisionStanding data={east}/>
            <DivisionStanding data={central}/>
            <DivisionStanding data={west}/>
        </div>
    )
}

export default LeagueStanding;