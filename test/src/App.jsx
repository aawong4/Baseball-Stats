import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home';
import Standings from "./pages/Standings";
import Schedule from "./pages/Schedule"
import Login from "./pages/Login"
import './App.css'

function App() {
  return (
    <>
      <Router>
        <div className="header">
            <nav><Link to="/">Home</Link></nav>
            <nav><Link to="standings">Standings</Link></nav>
            <nav><Link to="schedule">Schedule</Link></nav>
            <nav class="right"><Link to="login">Login</Link></nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="standings" element={<Standings />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;