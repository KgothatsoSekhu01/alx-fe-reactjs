import axios from 'axios';

const fetchUserData = async (username, location = '', minRepos = 0) => {
  // Construct the query string
  let query = `in:login ${username}`;

  // Add location filter if provided
  if (location) {
    query += `+location:${location}`;
  }

  // Add minimum repositories filter if provided
  if (minRepos > 0) {
    query += `+repos:>=${minRepos}`;
  }

  try {
    // Make the API call with the constructed query
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

    // Return the user data from the response
    return response.data.items;
  } catch (error) {
    // If there's an error (e.g., user not found or invalid query), return an empty array
    console.error("Error fetching user data:", error);
    throw new Error('Failed to fetch user data');
  }
};

export { fetchUserData };
