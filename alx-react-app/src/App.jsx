import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";import React from 'react';

import Header from './Header';  // Import the Header component
import MainContent from './MainContent';  // Import the MainContent component
import Footer from './Footer';  // Import the Footer component

function App() {
  return (
    <div>
     <header>
  <h1>My Favorite Cities</h1>
</header>
      return (
    <main>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
      <Footer />  {/* Include the Footer component */}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
import React from "react";
import WelcomeMessage from "./WelcomeMessage"; // import the new component

function App() {
  return (
    <div>
      <WelcomeMessage /> {/* Add the WelcomeMessage component here */}
    </div>
    import React from 'react';
import Footer from './Footer';  // Import the Footer component

function App() {
  return (
    <div>
      <Footer />  {/* Include the Footer component */}
    </div>
  );
  );
}

export default App;
