import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const EditRecipe = () => {
  const { id } = useParams();

  const [recipeDetails, setRecipeDetails] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const categoriesData = await axios.get(
        "http://localhost:3000/categories"
      );
      if (categoriesData?.status === 200) {
        setCategories(categoriesData?.data);
      }

      const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
      if (recipeData?.status === 200) {
        setRecipeDetails(recipeData?.data);
      }
    }

    load();
  }, [id]);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const recipeData = {
      id,
      title,
      price,
      category,
      description,
    };
    const alert = window.confirm('Are you sure! You Want to Update This Recipe');
    console.log(alert)
    if(alert){
    await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData);
    toast.success("Successfully Updated A Recipe!")
    }
  };
  return (
    <div className="w-full px-16 mt-10">
      <h1 className="text-4xl mb-4 text-center">Update Recipe</h1>
      <form onSubmit={handleCreateRecipe} className="max-w-3xl mx-auto mt-16">
        <div className="mb-4">
          <label>Title</label>
          <input
            defaultValue={recipeDetails?.title}
            type="text"
            name="title"
            className="input-error w-full py-3 px-5 border"
            required
          />
        </div>
        <div className="flex gap-4 mb-4">
        <div className="w-full">
          <label>Price</label>
        <input
            type="number"
            name="price"
            defaultValue={recipeDetails?.price}
            className="input-error w-full py-3 px-5 border"
            required
          />
        </div>
          <div className="w-full">
            <label>Category</label>
          <select name="category" id="" className="select-error w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option
                key={category?.title}
                selected={category?.title === recipeDetails?.category}
                value={category?.title}
              >
                {category?.title}
              </option>
            ))}
          </select>
          </div>
        </div>

        <div className="mb-8">
          <label>Description</label>
          <textarea
            defaultValue={recipeDetails?.description}
            name="description"
            className="textarea-error w-full py-3 px-5 border"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Update Recipe"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
  );
};

export default EditRecipe;
