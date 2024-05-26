/* eslint-disable react/prop-types */
import pizza from "../../assets/pizza.webp";

export default function RecepiCard({ recipe }) {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={pizza} alt="food" className="max-w-50" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-rose-600">{recipe?.title}</h2>
        <p>
          {recipe?.description}
        </p>
        <div className="card-actions justify-between items-center">
        <p className="font-semibold text-gray-500">Price: ${recipe?.price}</p>
          <div className="badge badge-outline">{recipe?.category}</div>
        </div>
      </div>
    </div>
  );
}
