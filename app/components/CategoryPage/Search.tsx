"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Search() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_API + "/categories/"
        );
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId((prevCategoryId) =>
      prevCategoryId === categoryId ? null : categoryId
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <span>Error: {error.message}</span>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Filter By Category
      </h3>
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {categories.map((category) => (
          <li
            key={category.id}
            className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
          >
            <div className="flex items-center ps-3">
              <input
                id={category.id}
                type="checkbox"
                checked={selectedCategoryId === category.id}
                className="h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={() => handleCategoryChange(category.id)}
              />
              <label
                htmlFor={category.id}
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {category.category_name}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}