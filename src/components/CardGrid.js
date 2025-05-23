import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import "./css/CardGrid.css";

export default function CardGrid({ items }) {
  const [viewMore, setViewMore] = useState(false);
  const visibleItems = viewMore ? items : items.slice(0, 5);
  return (
    <div className="card-section">
      <div className="card-grid">
        {visibleItems.map((recipe) => (
          <RecipeCard key={recipe.id} data={recipe} />
        ))}
      </div>
      {!viewMore && items.length > 5 && (
        <div className="view-more-wrapper">
          <button className="view-more-btn" onClick={() => setViewMore(true)}>
            View More
          </button>
        </div>
      )}
    </div>
  );
}
