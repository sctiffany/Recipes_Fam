import {NavLink, useLoaderData} from "react-router-dom";

export function Recipes () {
    const recipes = useLoaderData();
    return <>
        <h1>Toutes les recettes</h1>
        <ul>
            {recipes.map((recipe) => (
                <li key={recipe.id} >
                    <NavLink to={recipe.id}>{recipe.title}</NavLink>
                </li>
            ))}
        </ul>
    </>
}