import React from "react";
import { useQuery } from "react-query";

// Fetching function to retrieve posts from the API
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Error fetching posts");
  }
  return res.json();
};

const PostsComponent = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery("posts", fetchPosts, {
    // Caching and refetching configurations
    cacheTime: 5 * 60 * 1000, // Cache the data for 5 minutes
    staleTime: 2 * 60 * 1000, // Mark data as stale after 2 minutes
    refetchOnWindowFocus: true, // Automatically refetch when the window is focused
    keepPreviousData: true, // Keep old data while loading new data
  });

  // Show loading or error states
  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      {isFetching && <p>Refreshing data...</p>}

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
