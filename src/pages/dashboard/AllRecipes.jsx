import { useEffect, useState } from "react";
import RecepiCard from "../../components/cards/RecepiCard";


export default function AllRecipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/recipes/')
        .then(res => res.json())
        .then(data => setRecipes(data))
    } , [])

    console.log(recipes)

  return (
    <div className="w-full px-16 mt-10">
      <h1 className="text-3xl mb-4">All Recipes</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
            {
                recipes?.map(recipe => <RecepiCard key={recipe.id} recipe={recipe} />)
            }
           </div>

    </div>
  )
}
