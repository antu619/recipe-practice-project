import axios from "axios";
import { useEffect, useState } from "react";

const AddRecipe = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      if (data?.status === 200) {
        console.log(data?.data);
        setCategories(data?.data);
      }
    }

    load();
  }, []);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    const form = e.target;

    const id = form.id.value;
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

    await axios.post("http://localhost:3000/recipes", recipeData);
  };
  return (
    <div className="w-full px-16 mt-10">
      <h1 className="text-4xl mb-4 text-center">Add Recipe</h1>
      <form onSubmit={handleCreateRecipe} className="max-w-3xl mx-auto mt-16">
        <div className="mb-4">
          <input type="text" name="id" className="input-error w-full py-3 px-5 border" placeholder="Id" required />
        </div>
        <div className="mb-4">
          <input type="text" name="title" className="input-error w-full py-3 px-5 border" placeholder="Title" required />
        </div>
        <div className="flex gap-4 mb-4">
          <input
            type="number"
            name="price"
            className="input-error w-full py-3 px-5 border"
            placeholder="Price"
            required
          />
          <select name="category" id="" className="select-error w-full py-3 px-5 border">
          <option disabled selected>Selecrt a Category</option>
            {categories?.map((category) => (
              <option key={category?.id} value={category?.title}>
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8">
          <textarea name="description" className="textarea-error w-full py-3 px-5 border" placeholder="Description" required />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Add Recipe"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
