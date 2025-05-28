import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/RecipeDetail.css';

export default function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find(r => String(r.id) === id);
  if (!recipe) return <p className="not-found">Recipe not found.</p>;

  return (
    <div className="recipe-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <h1 className="title">{recipe.name}</h1>

      <div className="top-section">
        <img src={recipe.image} alt={recipe.name} className="detail-img" />
        <div className="details">
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
          <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
          <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
          <p><strong>Total Time:</strong> {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <p><strong>Calories/Serving:</strong> {recipe.caloriesPerServing}</p>
          <p><strong>Rating:</strong> ⭐ {recipe.rating} ({recipe.reviewCount} reviews)</p>
          <p><strong>Meal Type:</strong> {recipe.mealType.join(', ')}</p>
          <p><strong>Tags:</strong> {recipe.tags.join(', ')}</p>
        </div>
      </div>

      <div className="section">
        <h2>🧂 Ingredients</h2>
        <ul>
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>👨‍🍳 Instructions</h2>
        <ol>
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
