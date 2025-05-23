import React from 'react';
import './css/RecipeCard.css';

export default function RecipeCard({ data }) {
  return (
    <div className="recipe-card">
      <img src={data.image} alt={data.name} className="recipe-img" />

      <div className="recipe-body">
        <h3 className="recipe-title">{data.name}</h3>
        <p><strong>Cuisine:</strong> {data.cuisine}</p>
        <p><strong>Prep:</strong> {data.prepTimeMinutes} min • <strong>Cook:</strong> {data.cookTimeMinutes} min</p>
        <p><strong>Servings:</strong> {data.servings}</p>
        <p><strong>Rating:</strong> ⭐ {data.rating} ({data.reviewCount})</p>

        <div className="tags">
          {data.tags?.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
