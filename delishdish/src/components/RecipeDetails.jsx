import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
    const { id } = useParams();
    const [ recipe, setRecipe ] = useState(null);

    if (!recipe) {
        return (
            <div>Loading ...</div>
        )
    }
    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <h3>Ingredients: </h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => 
                    (
                        <li key={index}>{ingredient}</li>
                    )
                )}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
        </div>
    )
}
export default RecipeDetail;