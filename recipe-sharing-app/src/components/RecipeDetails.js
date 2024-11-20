// src/components/RecipeDetails.jsx
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import { EditRecipeForm } from './EditRecipeForm';
import { DeleteRecipeButton } from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export { RecipeDetails };
