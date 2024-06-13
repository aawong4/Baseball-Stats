import React from "react";
import styles from './Header.module.css'

function Header() {
    const redirectToMLB = () => {
        window.location.href = "https://www.mlb.com";
    }

    return (
        <div className={styles.container}>
            <nav onClick={redirectToMLB}>HOME</nav>
            <nav>STANDINGS</nav>
            <nav>SCHEDULE</nav>
            <nav className={styles.right}>LOGIN</nav>
        </div>
    )
}

export default Header;