# React Query Demo

This project demonstrates how to integrate **React Query** into a React application to fetch, cache, and update data from an API. The app uses the **JSONPlaceholder** API to fetch posts and displays them with the ability to refetch the data on demand.

## Features

- **Fetching Data**: Fetches a list of posts from the JSONPlaceholder API using React Query's `useQuery` hook.
- **Caching**: Automatically caches the posts and avoids unnecessary API calls when navigating away and back to the component.
- **Manual Refetch**: Includes a button to manually trigger a data refetch and update the posts.
- **Error Handling**: Displays error messages if the data fetching fails.
- **Loading State**: Shows a loading message while the data is being fetched.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Query**: Data-fetching and state management library for React.
- **JSONPlaceholder**: Free online REST API for testing and prototyping.

## Setup and Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/react-query-demo.git
cd react-query-demo
