import React, { useState, useEffect } from 'react';
import DivisionStanding from './DivisionStanding';
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/mlb/stats')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Current MLB Standings</h1>
      {loading ? (
        <p></p>
      ) : (
        <div className="leagueContainer">
          <div className="league">
            <h2>American League</h2>
            <DivisionStanding data={data[201]} />
            <DivisionStanding data={data[202]} />
            <DivisionStanding data={data[200]} />
          </div>
          <div className="league">
            <h2>National League</h2>
            <DivisionStanding data={data[204]} />
            <DivisionStanding data={data[205]} />
            <DivisionStanding data={data[203]} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;