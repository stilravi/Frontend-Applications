import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ApiProvider } from "./Provider/ContextProvider";

function App() {
  return (
    // <ApiProvider>
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          {/* <Routes> is new since v.6 of React Router (<Switch> was used before in v.5)*/}
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    // </ApiProvider>
  );
}

export default App;
