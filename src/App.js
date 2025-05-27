import React, { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import RecipeDetail from './components/RecipeDetail';
import Footer from './components/Footer';
import loadingVid from './Images/loadingVid.mp4';

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes?limit=110&skip=0')
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(data => {
        setRecipes(data.recipes || data);
        setTimeout(()=> setLoading(false),2500);
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
        {loading &&(
          <div className='loading-screen'>
            <video autoPlay muted loop playsInline className='loading_video'>
              <source src={loadingVid} type="video/mp4"/>
            </video>
            <p>Wait for the magic</p>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && (
          <Routes>
            <Route path='/' element={<CardGrid items={recipes}/>}/>
            <Route path='/recipe/:id' element={<RecipeDetail recipes={recipes}/>}/>
          </Routes>
        )}
      </main>
      <Footer/>
    </div>
  );
}
