import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ setUsers, setLoading, setError }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target.value;
    if (name === 'username') setUsername(value);
    if (name === 'location') setLocation(value);
    if (name === 'minRepos') setMinRepos(value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === '') return;

    setLoading(true);
    setError('');

    try {
      // Construct the query with advanced filters
      const query = `user:${username}+location:${location}+repos:>=${minRepos}`;
      const userData = await fetchUserData(query);
      setUsers(userData);
    } catch (error) {
      setError("avatar_url", "login", "Looks like we cant find the user", "img");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-4">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter GitHub username"
            value={username}
            onChange={handleInputChange}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location (optional)"
            value={location}
            onChange={handleInputChange}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            id="minRepos"
            name="minRepos"
            value={minRepos}
            onChange={handleInputChange}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            placeholder="Minimum number of repositories"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
