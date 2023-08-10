import React, { useState } from "react";

function RecipeCreate() {
  /* TODO: When the form is submitted, a new recipe 
  should be created, and the form contents cleared. */
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

// <input name="name">
// <input name="cuisine">
// <input name="photo">
// <textarea name="ingredients">
// <textarea name="preparation">
