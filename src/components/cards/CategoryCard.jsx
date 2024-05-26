/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
  return (
    <div className="border hover:border-rose-600 hover:text-rose-600 duration-300 px-5 py-3 rounded">
      <h1 className="text-center">{category?.title}</h1>
    </div>
  );
}
