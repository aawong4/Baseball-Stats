import React, { useState, useEffect } from 'react';
import LeagueStanding from './LeagueStanding';
import Schedule from './Schedule'
import Header from './Header'
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
        <>
          <Header></Header>
          <div className="container">
            <div className="mainContentContainer">
              {/* <h1>Stat Leaders</h1> */}
              <h1>Standings</h1>
              <LeagueStanding east={standings[201]} central={standings[202]} west={standings[200]}></LeagueStanding>
              <div style={{height: '20px'}}></div>
              <LeagueStanding east={standings[204]} central={standings[205]} west={standings[203]}></LeagueStanding>
            </div>
            <div className="scheduleContainer">
              <Schedule data={schedule}/>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;