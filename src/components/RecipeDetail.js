import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/RecipeDetail.css';

export default function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find(r => String(r.id) === id);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="recipe-detail-container">
      {/* Hero Section */}
      <div className="recipe-hero">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${recipe.image})` }}
        ></div>

        <div className="hero-content">
          <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
          <h1>{recipe.name}</h1>
          <div className="hero-info">
            <p>🍽️ Cuisine: {recipe.cuisine}</p>
            <p>⭐ {recipe.rating} ({recipe.reviewCount} reviews)</p>
            <p>⏱️ Prep: {recipe.prepTimeMinutes} mins</p>
            <p>🔥 Cook: {recipe.cookTimeMinutes} mins</p>
            <p>👨‍👩‍👧‍👦 Servings: {recipe.servings}</p>
          </div>
        </div>
      </div>

      {/* Body Section */}
      <div className="recipe-body">
        <section>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
