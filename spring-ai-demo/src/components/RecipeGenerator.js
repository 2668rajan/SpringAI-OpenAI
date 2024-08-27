import React, { useState } from "react";

function RecipeGenerator() {
    const [ingredients, setIngredients] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [dietaryRestrictions, setDietaryRestrictions] = useState("");
    const [recipe, setRecipe] = useState("");

    const createRecipe = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/recipe-creator?ingredients=${ingredients}&dietaryRestrictions=${dietaryRestrictions}&cuisine=${cuisine}`
          );
          const data = await response.text();
          console.log(data);
          setRecipe(data);
        } catch (error) {
          console.log("error generating response", error);
        }
      };
      return (
        <div>
          <h2>Create a Recipe</h2>
          <div>
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Enter your ingredients (comma seperated)"
              />
      </div>

      <div>
        <input
          type="text"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          placeholder="Enter cuisine type"
        />
 </div>
      <div>
        <input
          type="text"
          value={dietaryRestrictions}
          onChange={(e) => setDietaryRestrictions(e.target.value)}
          placeholder="Enter your dietary restrictions"
        />
      </div>

      <div>
        <button onClick={createRecipe}>Create Topic</button>
      </div>

      <div className="output">
        <pre className="recipe-text">{recipe}</pre>
      </div>
    </div>
  );
}

export default RecipeGenerator;
