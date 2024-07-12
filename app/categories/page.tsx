"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryItem from "../components/CategoryPage/CategoryItem";
import HeroArea from "../components/HeroArea";
import Search from "../components/CategoryPage/Search";
import Link from "next/link";
import AddCategory from "../components/CategoryPage/AddCategory";

export default function Courses({ searchParams }) {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const isAdmin = true;
  const [editCategory, setEditCategory] = useState("");
  const [reload, setReload] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_API + "/categories",
          {
            params: searchParams,
          }
        );
        setCategories(response.data);
        setFilteredCategories(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchParams, reload]);

  useEffect(() => {
    if (searchParams && searchParams.categoryId) {
      setFilteredCategories(categories.filter(category => category.id === parseInt(searchParams.categoryId)));
    } else {
      setFilteredCategories(categories);
    }
  }, [categories, searchParams]);

  return (
    <>
      <HeroArea
        title="Categories"
        description="Browse through our available categories and explore diverse topics."
      />
      <div className="container mx-auto">
        <div className="basis-3/12 pr-10">
          <div className="py-16">
            {<Search />}
          </div>
        </div>
        {isAdmin?<AddCategory editCategory={editCategory} setReload={setReload}/> : null}
        <div className="py-16 flex flex-wrap">        
          {error ? (
            <div
              className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>

              <div>
                <span className="font-medium">Error!</span> {error.message}.
              </div>
            </div>
          ) : loading ? (
            <div>Loading...</div>
          ) : filteredCategories.length > 0 ? ( 
            filteredCategories.map((category) => (
              <CategoryItem key={category.id} category={category} setEditCategory={setEditCategory} setReload={setReload}/>
            ))
          ) : (
            <div
              className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Sorry!</span> No categories found.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}