import React from 'react';
import useQuery from 'react-query';

// Function to fetch posts data
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Error fetching posts');
  }
  return res.json();
};

const PostsComponent = () => {
  // Use React Query to fetch posts data
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

  // Handling loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handling error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={refetch}>Refetch Posts</button>
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
