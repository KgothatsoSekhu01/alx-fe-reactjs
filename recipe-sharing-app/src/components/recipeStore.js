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

export { useRecipeStore };
