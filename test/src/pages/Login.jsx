import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm />
    </div>
  );
};

export default Login;
