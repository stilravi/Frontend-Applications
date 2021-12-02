import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Nav from "./Components/Navigation/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // Using Router for navigation inside the App
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
