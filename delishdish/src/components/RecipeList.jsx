import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from './RecipeCard';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('/api/recipes/')
          .then(response => setRecipes(response.data))
          .catch(error => console.error(error));
    }, []);
    
    return (
        <div>
            <h1>Recipe List</h1>
            <div className="recipe-grid">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}

export default RecipeList;