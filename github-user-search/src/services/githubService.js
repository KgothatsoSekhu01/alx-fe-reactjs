import axios from 'axios';

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get(url);
  return response.data;
};
import axios from 'axios';

export const fetchUserData = async (query) => {
  const url = `https://api.github.com/search/users?q=${query}`;
  const response = await axios.get(url);
  return response.data.items; // Return list of users from the response
};
