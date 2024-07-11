import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`/api/recipes/${id}/`, {
                    cancelToken: source.token
                });
                if (isMounted) {
                    setRecipe(response.data);
                    setLoading(false);
                }
            } catch (error) {
                if (isMounted) {
                    setError('Failed to fetch recipe');
                    setLoading(false);
                }
            }
        };

        fetchRecipe();

        return () => {
            isMounted = false;
            source.cancel('Component unmounted');
        };
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <h3>Cooking Time: </h3>
            <p>{recipe.cooking_time}</p>
            <h3>Servings: </h3>
            <p>{recipe.servings}</p>
            <h3>Ingredients: </h3>
            <ul>
                {recipe.ingredients.split(',').map((ingredient, index) => (
                    <li key={index}>{ingredient.trim()}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
        </div>
    )
}
export default RecipeDetails;
