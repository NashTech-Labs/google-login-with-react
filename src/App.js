import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="app">
       <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/homepage" element={<Homepage />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
