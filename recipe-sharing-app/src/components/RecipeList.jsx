import Link from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes available!</p>
      )}
    </div>
  );
};
import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const { recipes, filteredRecipes, filterRecipes } = useRecipeStore((state) => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes,
  }));

  // Filter recipes whenever the search term changes
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  const recipesToDisplay = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {recipesToDisplay.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList
