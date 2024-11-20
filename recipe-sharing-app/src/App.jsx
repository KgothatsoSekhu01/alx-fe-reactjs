import BrowserRouter as Router, Route, Routes from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        {/* Add Recipe Form */}
        <AddRecipeForm />

        {/* Recipe List */}
        <h2>Recipe List</h2>
        <RecipeList />

        {/* Routes for Recipe Details */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};
import React from 'react';
import { useRecipeStore } from './recipeStore';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeList from './components/RecipeList'; // Assuming you have a RecipeList component

const App = () => {
  const { setRecipes } = useRecipeStore((state) => ({
    setRecipes: state.setRecipes,
  }));

  // Sample recipes to set (this could come from an API or other data source)
  const sampleRecipes = [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish' },
    { id: 2, title: 'Chicken Curry', description: 'A flavorful chicken dish with spices' },
    { id: 3, title: 'Vegetable Stir Fry', description: 'A healthy mix of stir-fried vegetables' },
  ];

  // Initialize recipes in the Zustand store
  React.useEffect(() => {
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <RecipeList /> {/* Main recipe list */}
      <FavoritesList /> {/* Display favorite recipes */}
      <RecommendationsList /> {/* Display personalized recommendations */}
    </div>
  );
};

export default App;
