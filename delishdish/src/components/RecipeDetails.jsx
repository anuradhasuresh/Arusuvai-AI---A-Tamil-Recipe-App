import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineClose } from "react-icons/ai";

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
                    const response  = await axios.get(
                        `http://3.145.122.94/api/recipes/${id}/`,
                        { 
                            // headers: {
                            // 'Access-Control-Allow-Origin':'*',
                            // },
                            // cancelToken: source.token
                });
                if (isMounted) {
                    console.log('API Response:', response.data); 
                    setRecipe(response.data);
                    setLoading(false);
                }
            } catch (error) {
                if (isMounted) {
                    console.error('API Error:', error);  
                    setError('Recipe not found');
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

    const renderIngredients = () => {
        if (!recipe.ingredients) return null;
        
        let ingredientsList;
        if (Array.isArray(recipe.ingredients)) {
            ingredientsList = recipe.ingredients;
        } else if (typeof recipe.ingredients === 'string') {
            ingredientsList = recipe.ingredients.split(',');
        } else {
            console.error('Unexpected ingredients format:', recipe.ingredients);
            return null;
        }
        
        return ingredientsList.map((ingredient, index) => {
            const ingredientToDisplay = ingredient.replace(/^\[?\s*['"]?|['"]?\s*\]?$/g, '').trim();
            return <li key={index}>{ingredientToDisplay}</li>;
        });
    };

    return (
        <div className='container'>
            <div className='recipe-container'>
                <h1>{recipe.name}</h1>

                <p>{recipe.description}</p>
                <h3>Cooking Time: </h3>
                <p>{recipe.cooking_time}</p>
                <h3>Servings: </h3>
                <p>{recipe.servings}</p>
                <h3>Ingredients: </h3>
                <ul>
                    {renderIngredients()}
                </ul>
                <h3>Instructions:</h3>
                <dl>
                    {recipe.instructions.split('\n').map((step, index) => (
                        <dt key={index}>{step.trim()}</dt>
                    ))}
                </dl>
            </div>
            <div className='recipe-image-container'>
                {recipe.image_url && (
                    <img 
                        src={recipe.image_url} 
                        alt={recipe.name} 
                        style={{ maxWidth: '80%', height: 'auto', marginBottom: '20px' }}
                    />
                )}  
            </div>
            <a href='/'>
                <AiOutlineClose size={36}/>
            </a>
        </div>
    )
}
export default RecipeDetails;
