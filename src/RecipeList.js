import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  /* TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> 
   - that deletes the post when clicked */

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th> {/* Added tapleheaders */}
            <th>Cuisine</th>
            <th>Photos</th>
            <th>ingredients</th>
            <th>Preperation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {/* A row created to display the created recipes */}
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>
                <img src={recipe.photo} alt="" className="scale-down" />
              </td>
              <td className="content_td">
                <p>{recipe.ingredients}</p>
              </td>
              <td className="content_td">
                <p>{recipe.preparation}</p>
              </td>
              <td>
                {" "}
                {/* Delete button created*/}
                <button name="delete" onClick={() => deleteRecipe(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
