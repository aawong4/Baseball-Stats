import React, { useState, useEffect } from "react";
import LeagueStanding from "../components/Standings/LeagueStanding";
import PitchingStatLeaders from "../components/Player Stats/PitchingStatLeaders";
import HittingStatLeaders from "../components/Player Stats/HittingStatLeaders";
import Schedule from "../components/Schedule/Schedule";
import styles from "./Home.module.css";

function Home() {
  const [standings, setStandings] = useState(null);
  const [schedule, setScores] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true before starting the fetches

    Promise.all([
      fetch("http://localhost:5000/api/mlb/scores")
        .then((response) => response.json())
        .then((data) => setScores(data)),
      fetch("http://localhost:5000/api/mlb/standings")
        .then((response) => response.json())
        .then((data) => setStandings(data)),
      fetch("http://localhost:5000/api/mlb/stats")
        .then((response) => response.json())
        .then((data) => setStats(data)),
    ])
      .then(() => setLoading(false)) // Set loading to false after all fetches complete
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading is set to false even if an error occurs
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p></p>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.mainContentContainer}>
              <h1>Standings</h1>
              <LeagueStanding
                east={standings[201]}
                central={standings[202]}
                west={standings[200]}
              ></LeagueStanding>
              <div style={{ height: "20px" }}></div>
              <LeagueStanding
                east={standings[204]}
                central={standings[205]}
                west={standings[203]}
              ></LeagueStanding>
              <h1>Stat Leaders</h1>
              <PitchingStatLeaders data={stats} />
              <div style={{ height: "20px" }}></div>
              <HittingStatLeaders data={stats} />
            </div>
            <div className={styles.scheduleContainer}>
              <Schedule data={schedule} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
