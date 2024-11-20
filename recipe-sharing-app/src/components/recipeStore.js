import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [], // Initial empty state for recipes
  
  // Action to add a new recipe
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  
  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
  
  // Action to delete a recipe by its ID
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
}));
