import React, { useEffect, useState } from "react";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    return (
        <div>
            <h1>Recipe List</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key = {recipe.id}>
                        {recipe.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RecipeList;
