// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe); // Access the addRecipe function from the store
  const [title, setTitle] = useState(''); // State to hold the title input
  const [description, setDescription] = useState(''); // State to hold the description input

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the new recipe to the store
    addRecipe({ id: Date.now(), title, description });
    setTitle(''); // Reset title input
    setDescription(''); // Reset description input
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
      />
      <button type="submit" style={{ padding: '10px 20px' }}>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
