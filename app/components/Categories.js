import Link from "next/link";

const Categories = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  const data = await res.json()
  const categories = data.categories

  return (
    <div className="container mx-auto mb-28 py-3 px-3 sm:px-5 lg:px-10">
      <h3 className="text-center text-2xl font-semibold mb-5">Categories</h3>

      <ul className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <li className="w-20 sm:w-24 lg:w-36 p-2 bg-slate-200 rounded-xl group transition-all" key={cat.idCategory}>
            <Link href={`/categories?c=${cat.strCategory}`}>
              <img className="group-hover:scale-75 transition-all duration-300" src={cat.strCategoryThumb} alt={cat.strCategory} />
              <p className="text-center line-clamp-1">{cat.strCategory}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
