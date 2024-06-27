import React, { useState } from "react";
import axios from "axios";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        username,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
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
          <button type="submit">Register</button>
          <p>Don't have an account? Sign Up</p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
