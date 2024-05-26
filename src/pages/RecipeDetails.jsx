import { useLoaderData } from "react-router-dom";
import pizza from "../assets/pizza.webp";

const RecipeDetails = () => {
    const recipe = useLoaderData();
    const {title, price, description, category} = recipe;
    return (
        <div className="w-full px-16 mt-10">
      <h1 className="text-3xl mb-4">Recipe Details</h1>
        <div className="flex items-center gap-10">
            <img className="w-72" src={pizza} alt="Recipe Image" />
            <div>
                <h2 className="text-4xl"><span className="font-semibold">Name:</span> {title}</h2>
                <h4 className="text-2xl mt-5"><span className="font-semibold">Category:</span> {category}</h4>
                <h4 className="text-2xl my-5 text-gray-500"><span className="font-semibold">Price:</span> ${price}</h4>
                <p className="text-xl"><span className="font-semibold">Description:</span> {description}</p>
            </div>
        </div>
        </div>
    );
};

export default RecipeDetails;