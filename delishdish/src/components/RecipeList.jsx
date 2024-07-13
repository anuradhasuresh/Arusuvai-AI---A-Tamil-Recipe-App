import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from './RecipeCard';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get(`http://3.145.122.94/api/recipes/`, 
        // {
            // headers: {
            //     'Access-Control-Allow-Origin':'*',
            // },
        // }
        )
          .then(response => setRecipes(response.data))
          .catch(error => console.error(error));
    }, []);
    
    return (
        <div style={{textAlign:"center"}}>
            <h1>Recipe Khazana</h1>
            <div className="recipe-grid">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}

export default RecipeList;