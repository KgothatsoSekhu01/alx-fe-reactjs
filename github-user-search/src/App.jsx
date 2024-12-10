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
    import { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchForm setUsers={setUsers} setLoading={setLoading} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
}
import { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchForm setUsers={setUsers} setLoading={setLoading} setError={setError} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users && !loading && !error && (
        <UserList user={users} />
      )}
    </div>
  );
}
import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]); // Store fetched user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error message

  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold mt-6">GitHub User Search</h1>
      
      <Search setUsers={setUsers} setLoading={setLoading} setError={setError} />
      
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      
      {users.length > 0 && !loading && !error && (
        <UserList users={users} />
      )}
    </div>
    // Example in App.jsx
<div className="bg-blue-500 text-white p-4">
  <h1>GitHub User Search</h1>
</div>

  );
}

export default App;


