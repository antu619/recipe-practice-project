import toast from "react-hot-toast";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe }) {

  const handleDelete = async() => {
    const alert = window.confirm('Are you sure! You Want Delete This Recipe');
    if(alert){
      await fetch(`http://localhost:3000/recipes/${recipe.id}`, {
      method: "DELETE"
    })
    .then((res) => res.json())
    .then(data => {
      console.log(data)
      toast.success("Successfully Deleted A Recipe!")
    })
    }
  }

  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-recipe/${recipe?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button onClick={handleDelete}  className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
}
