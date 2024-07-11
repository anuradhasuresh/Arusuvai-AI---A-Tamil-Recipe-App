import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

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
            <ul>
                {recipes.map(recipe => (
                    <li key = {recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RecipeList;
