import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import "./css/CardGrid.css";

export default function CardGrid({ items }) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage=12;
  const startIndex=(currentPage-1)*cardsPerPage;
  const endIndex=startIndex+cardsPerPage;
  const currentItems=items.slice(startIndex,endIndex);
  const totalPages=Math.ceil(items.length/cardsPerPage);
  useEffect(()=>{
    window.scrollTo({top:0, behavior:'smooth'});
  },[currentPage]);
  return (
    <div className="card-section">
      <div className="card-grid">
        {currentItems.map((recipe) => (
          <RecipeCard key={recipe.id} data={recipe} />
        ))}
      </div>
      {totalPages>1 && (
        <div className="pagination">
          {Array.from({length:totalPages}, (_,i)=>(
            <button key={i} onClick={()=> setCurrentPage(i+1)} className={currentPage===i+1?"active":""}>
              {i+1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
