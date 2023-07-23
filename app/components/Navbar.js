import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="shadow-md">
      <div className="container flex flex-col items-center mx-auto py-3 px-3 sm:px-5 lg:px-10 sm:flex-row sm:justify-between">
          <h1 className="text-3xl text-center font-semibold mb-2 sm:mb-0 lg:text-4xl">
            <Link href={"/"}>RecipeHub</Link>
          </h1>

          <SearchBar/>
      </div>
    </div>
  );
};

export default Navbar;
