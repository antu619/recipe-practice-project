import { useEffect } from "react";
import Banner from "../components/home/Banner";
import { useState } from "react";
import RecepiCard from "../components/cards/RecepiCard";
import CategoryCard from "../components/cards/CategoryCard";
import SectionHeader from "../components/shared/SectionHeader";

export default function Home() {
  const [recipes, setRescipes] = useState();
  const [categoris, setCategories] = useState();
  useEffect(() => {
    // fetch("http://localhost:3000/recipes")
    //   .then((res) => res.json())
    //   .then((data) => setRescipes(data));

    async function load() {
      //get recipies
      const recipeRes = await fetch("http://localhost:3000/recipes");
      const recipeData = await recipeRes.json();
      setRescipes(recipeData);
      //get categories

      const categoryRes = await fetch("http://localhost:3000/categories");
      const categoryData = await categoryRes.json();

      setCategories(categoryData);
    }
    load();

    // fetch("http://localhost:3000/categories")
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
  }, []);

  console.log("hi");
  return (
    <div>
      <Banner />

      <div className="lg:mx-16 md:mx-10 mx-3">
        <SectionHeader title={"Our Recipe Categories"} />
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">
          {categoris?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>
      <div className="mx-16">
      <SectionHeader title={"Our Newest Recipes"} />
        <div className="grid grid-cols-4 gap-10 mb-20">
          {recipes
            ?.reverse()
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecepiCard key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>
    </div>
  );
}
