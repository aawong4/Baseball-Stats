import React, { useState } from "react";
import axios from "axios";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      setLoggedIn(response.data.message == "True");
    } catch (error) {
      setLoggedIn(false);
    }
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
          <p>Don't have an account? Sign Up</p>
          <p>{loggedIn ? "Logged In" : ""}</p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
