import React from "react";
import RegisterForm from "../components/Forms/RegisterForm";

const Register = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RegisterForm />
    </div>
  );
};

export default Register;
