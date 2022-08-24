import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import "./css/header.css";
import "./css/about.css";
import "./css/home.css";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Home />

        <footer className="footer-container">
          <h6>Living the Simple Life</h6>
          <p>Copyright 2019</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
