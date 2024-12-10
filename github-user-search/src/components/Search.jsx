import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const SearchForm = ({ setUsers, setLoading, setError }) => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === '') return;
    
    setLoading(true);
    setError('');
    
    try {
      const userData = await fetchUserData(username);
      setUsers(userData);
    } catch (error) {
      setError('Looks like we can\'t find the user');
    } finally {
      setLoading(false);
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

export default SearchForm;
