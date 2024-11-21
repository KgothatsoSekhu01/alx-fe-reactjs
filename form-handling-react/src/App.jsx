import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

const App = () => {
  return (
    <div>
      <h1>Registration Form - Controlled Components</h1>
      <RegistrationForm />

      <h1>Registration Form - Formik</h1>
      <FormikForm />
    </div>
  );
};
// src/App.jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

// Initialize React Query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Posts from JSONPlaceholder</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
