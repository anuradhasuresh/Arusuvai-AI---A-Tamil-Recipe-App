import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    return (
        <Link to={`/recipes/${recipe.id}`} className="recipe-card">
            <div className="recipe-image">
                <img src={recipe.image_url} alt={recipe.name} />
            </div>
            <h3 className="recipe-title">{recipe.name}</h3>
        </Link>
    );
};

export default RecipeCard;