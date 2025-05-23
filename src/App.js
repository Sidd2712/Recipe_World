import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes?limit=100&skip=0')
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(data => {
        setRecipes(data.recipes || data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        {loading && <p>Loading recipes…</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && <CardGrid items={recipes} />}
      </main>
    </div>
  );
}
