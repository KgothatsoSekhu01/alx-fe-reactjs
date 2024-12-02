import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mt-4 rounded-lg" />
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
        <ul className="list-inside list-disc text-gray-700 mt-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mt-1">{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Cooking Instructions</h2>
        <ol className="list-inside list-decimal text-gray-700 mt-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mt-1">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
