import React, { useState, useEffect } from 'react';
import DivisionStanding from './DivisionStanding';
import Schedule from './Schedule'
import './App.css'

function App() {
  const [standings, setStandings] = useState(null);
  const [schedule, setScores] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true before starting the fetches

    Promise.all([
      fetch('http://localhost:5000/api/mlb/scores')
        .then(response => response.json())
        .then(data => setScores(data)),
      fetch('http://localhost:5000/api/mlb/standings')
        .then(response => response.json())
        .then(data => setStandings(data)),
    ])
      .then(() => setLoading(false)) // Set loading to false after all fetches complete
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Ensure loading is set to false even if an error occurs
      });
    }, []);

  return (
    <div>
      {loading ? (
        <p></p>
      ) : (
        <div className="container">
          <div className="leagueContainer">
            <h1>Standings</h1>
            <div className="league">
              <h2>American League</h2>
              <DivisionStanding data={standings[201]} />
              <DivisionStanding data={standings[202]} />
              <DivisionStanding data={standings[200]} />
            </div>
            <div className="league">
              <h2>National League</h2>
              <DivisionStanding data={standings[204]} />
              <DivisionStanding data={standings[205]} />
              <DivisionStanding data={standings[203]} />
            </div>
          </div>
          <div className="scheduleContainer">
            <Schedule data={schedule}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;