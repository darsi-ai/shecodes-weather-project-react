import './App.css';
import React from 'react';

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity = "Kyiv"/>
      <footer id="github-link">my open-source code on{" "}
        <a href="https://github.com/darsi-ai" target="_blank" rel="noreferrer">github</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
