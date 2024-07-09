import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import sampleRecipes from '../sampleRecipes';

const RecipeDetails = () => {
    const { id } = useParams();
    const [ recipe, setRecipe ] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            const foundRecipe = sampleRecipes.find(recipe => recipe.id === parseInt(id));
            setRecipe(foundRecipe);
        }, 1000);
    }, [id]);

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
export default RecipeDetails;
