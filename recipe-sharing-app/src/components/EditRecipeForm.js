import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join(', '));
  const [instructions, setInstructions] = useState(recipe.instructions);
  
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...recipe,
      title,
      description,
      ingredients: ingredients.split(',').map((ing) => ing.trim()),
      instructions,
    };
    updateRecipe(updatedRecipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma-separated)"
      />
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
