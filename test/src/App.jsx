import { useContext } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Standings from "./pages/Standings";
import Schedule from "./pages/Schedule";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="standings" element={<Standings />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
