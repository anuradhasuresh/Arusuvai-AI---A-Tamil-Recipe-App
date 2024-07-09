import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import sampleRecipes from '../sampleRecipes';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setRecipes(sampleRecipes);
        }, 1000);
    }, [])

    return (
        <div>
            <h1>Recipe List</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key = {recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                        {recipe.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RecipeList;
