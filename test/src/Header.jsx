import React from "react";
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.container}>
            <nav>HOME</nav>
            <nav>STANDINGS</nav>
            <nav>SCHEDULE</nav>
            <nav className={styles.right}>LOGIN</nav>
        </div>
    )
}

export default Header;