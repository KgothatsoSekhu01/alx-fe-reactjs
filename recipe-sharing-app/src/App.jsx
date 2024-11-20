import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddRecipeForm } from './components/AddRecipeForm';  // Importing AddRecipeForm
import { RecipeList } from './components/RecipeList';        // Importing RecipeList
import { RecipeDetails } from './components/RecipeDetails';  // Importing RecipeDetails

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        {/* Add a form to add new recipes */}
        <AddRecipeForm />

        {/* Recipe List Display */}
        <h2>Recipe List</h2>
        <RecipeList />

        {/* Routing for Recipe Details */}
        <Routes>
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
