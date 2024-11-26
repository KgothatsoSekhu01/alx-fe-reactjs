import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
  )
}
function App() {
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-3xl font-bold">Hello, Tailwind!</h1>
    </div>
  );
}

// src/App.jsx
import React from 'react';
import UserProfile from './components/UserProfile'; // Import UserProfile component

function App() {
  return (
    <div className="App">
      {/* Render the UserProfile component */}
      <UserProfile />
    </div>
  );
}

export default App;

