import Link from "next/link";

const page = async ({ searchParams }) => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchParams.q
  , {cache: "no-store"});
  const data = await res.json();
  const meals = data?.meals;

  return (
    <div className="container mt-2 mx-auto mb-28 py-3 px-3 sm:px-5 lg:px-10 lg:pt-5 sm:pb-10">
      {Array.isArray(meals) && meals.length > 0 ? (
        <ul className="flex flex-wrap justify-evenly sm:justify-center gap-y-4 gap-x-2 sm:gap-4">
          {meals?.map((meal) => {
            return (
              <li key={meal.idMeal} className="shadow-md w-full max-w-[115px] sm:max-w-[130px] xl:max-w-[170px] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
                <Link href={"search/" + meal.idMeal}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <p className="px-5 py-2 text-sm">{meal.strMeal}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-center">No Results</p>
      )}
    </div>
  );
};

export default page;
