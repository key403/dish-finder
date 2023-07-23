import React from "react";

const page = async ({ params: { searchId } }) => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + searchId
  );
  const json = await res.json();
  const recipe = json.meals ? json.meals[0] : null;

  const ingredients = [];
  // INGREDIENTS FOR THE RECIPE
  for (let i = 1; i <= 20; i++) {
    let ingredient = recipe["strIngredient" + i];

    if (ingredient) {
      ingredients.push(`${ingredient}`);
    } else {
      break;
    }
  }
  // INSTRUCTIONS FOR THE RECIPE
  let instructions = "";
  // string case 1
  if (recipe.strInstructions.includes("\r\n\r\n")) {
    instructions = recipe.strInstructions
      .split("\r\n\r\n")
      .filter((str) => str.length > 6);
  }
  // string case 2
  instructions = recipe.strInstructions
    .split("\r\n")
    .filter((str) => str.length > 6);

  return (
    <div className="container mx-auto py-3 px-3 sm:px-5 lg:px-10 mt-4 mb-28">
      {recipe ? (
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 mb-8 sm:mb-10 lg:mb-14">
            <div className="sm:col-span-1 md:col-span-2">
              <h3 className="font-semibold text-2xl mb-5">{recipe.strMeal}</h3>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            </div>

            <div className="sm:col-span-1 md:col-span-3">
              <h3 className="font-semibold text-2xl mb-5">Ingredients</h3>
              <ul className="grid grid-cols-[repeat(auto-fit,_minmax(5rem,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] gap-3">
                {ingredients.map((ingredient, i) => (
                  <li key={i} className="bg-slate-200 rounded-lg p-2 group cursor-pointer">
                    <div className="p-4">
                      <img
                        className="object-contain h-full w-full mx-auto group-hover:scale-150 transition-all duration-300"
                        src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
                        alt={ingredient}
                      />
                    </div>
                    <p className="text-center px-2">{ingredient}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {instructions.length ? (
          <div>
            <h3 className="font-semibold text-center text-2xl">Instructions</h3>
            {instructions.map((step, i) => (
              <div key={i} className="mb-5">
                <h4>STEP {i + 1}</h4>
                <p>{step}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>{recipe.strInstructions}</p>
        )}
        </div>
      ) : (
        <p>not found</p>
      )}
    </div>
  );
};

export default page;
