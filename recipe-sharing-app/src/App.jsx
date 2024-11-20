import Header from './components/Header';  
import MainContent from './components/MainContent';
import Footer from './components/Footer'; 

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";import React from 'react';

function App() {
  return (
    <div>
       <Header />  {/* My Favourite Cities */}
      <MainContent />  {/* I love to visit New York, Paris, and Tokyo */}
      <Footer />  {/* @2023 City Lovers */}
    </div>
  );
}
     <header>
  <h1>My Favorite Cities</h1>
</header>
      return (
    <main>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
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
import React from 'react';
import UserProfile from './components/UserProfile';  // Import UserProfile component

function App() {
  return (
    <div>
      <h1>User Profile</h1>
      {/* Use the UserProfile component and pass props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Enjoys coding and traveling" 
      />
    </div>
  );
}

// src/App.jsx
import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm /> {/* Form to add a recipe */}
      <RecipeList /> {/* Display the list of recipes */}
    </div>
  );
}

export default App;


export default App;

import React from "react";
import WelcomeMessage from "./WelcomeMessage"; // import the new component

function App() {
  return (
    <div>
      <WelcomeMessage /> {/* Add the WelcomeMessage component here */}
    </div>
    
    import React from 'react';
  
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navigation bar that appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        {/* Other routes like home, recipe listing, etc. */}
      </Routes>
    </Router>
  );
};

export default App;


    import React from 'react';
function Footer() {
  return (
    <footer>
      <p>© 2023 City Lovers</p>
    </footer>
  );
}

export default Footer;

  );
  );
}
import React from 'react';
import Counter from './components/Counter';  // Import the Counter component

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />  {/* Use the Counter component */}
    </div>
  );
}

export default App;
