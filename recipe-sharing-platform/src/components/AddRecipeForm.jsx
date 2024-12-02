import { useState } from 'react';

const AddRecipeForm = () => {
  // States for form fields
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  
  // State for error messages
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Validate the fields
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!steps) newErrors.steps = 'Preparation steps are required';

    // Validate ingredients to ensure at least two ingredients are provided
    const ingredientsList = ingredients.split('\n').filter((ingredient) => ingredient.trim() !== '');
    if (ingredientsList.length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = validate();

    // If validation fails, set errors and stop submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Handle successful form submission (e.g., log data to console)
    console.log({
      title,
      ingredients: ingredients.split('\n').filter((ingredient) => ingredient.trim() !== ''),
      steps: steps.split('\n'),
    });

    // Optionally reset the form after successful submission
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg md:max-w-3xl">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div className="space-y-2">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="space-y-2">
          <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="Enter ingredients, one per line"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div className="space-y-2">
          <label htmlFor="steps" className="block text-lg font-medium text-gray-700">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="6"
            placeholder="Enter preparation steps, one per line"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
