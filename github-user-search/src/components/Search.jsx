import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ setUsers, setLoading, setError }) => {
  const [username, setUsername] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === '') return;

    setLoading(true); // Show loading message
    setError(''); // Reset error message

    try {
      // Fetch user data from GitHub API
      const userData = await fetchUserData(username);
      setUsers(userData); // Set the fetched user data to parent component
    } catch (error) {
      // If error occurs (e.g., user not found), set the error state
      setError("avatar_url", "login", "Looks like we cant find the user", "img"];
    } finally {
      setLoading(false); // Hide loading message after API call
     
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
