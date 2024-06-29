import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="standings">Standings</Link>
      </nav>
      <nav>
        <Link to="schedule">Schedule</Link>
      </nav>
      <nav className={styles.right}>
        <Link to="login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
