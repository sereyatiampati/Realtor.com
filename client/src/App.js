import './App.css';
import  Signup  from "./Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import Navbar  from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/join-realtor.com" element={<Signup />} />

          </Routes>
      </Router>
    </div>
  );
}

export default App;
