import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
    } catch (error) {}
  };
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ height: 20 }} />
          <div>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ height: 20 }} />
          <button type="submit">Login</button>
        </form>
        <div className={styles.signup}>
          <p>Don't have an account?</p>
          <Link to="../register" className={styles.blacktext}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
