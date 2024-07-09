import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <RecipeList />} />
        <Route path="/recipes/:id" element={ <RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
