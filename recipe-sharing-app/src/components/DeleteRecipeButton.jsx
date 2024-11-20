import { useRecipeStore } from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId); // Remove recipe by ID
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export { DeleteRecipeButton };
