// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state for the recipes
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })), // Add a new recipe
  setRecipes: (recipes) => set({ recipes }), // Set the list of recipes
}));

export { useRecipeStore };
