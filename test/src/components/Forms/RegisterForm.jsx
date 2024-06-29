import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        username,
        password,
      });
    } catch (error) {}
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div style={{ height: 20 }} />
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ height: 20 }} />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
