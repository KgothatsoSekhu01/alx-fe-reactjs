import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => 
    set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id)
  })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  setRecipes: (recipes) => set({ recipes }),
}));

import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Computed property for filtered recipes
  filteredRecipes: [],

  // Action to filter recipes based on the search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Initialize the recipes and filter on the first load
  setRecipes: (recipes) => set({ recipes }),
}));
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [], // Store for favorite recipe IDs
  recommendations: [], // Store for recommended recipes

  // Action to add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      // Example recommendation logic: Recommend recipes that are in the favorites list
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5 // Simulating recommendation logic
      );
      return { recommendations: recommended };
    }),

  // Action to set the list of recipes
  setRecipes: (recipes) => set({ recipes }),

}));

export { useRecipeStore };
