import './App.css';
import React from 'react';

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity = "Kyiv"/>
      <footer id="github-link">my {" "}
        <a href="https://github.com/darsi-ai/shecodes-react" target="_blank" rel="noreferrer">open-source code</a> on github
      </footer>
      </div>
    </div>
  );
}

export default App;
