import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
// import CategoryImage from "../../../public/category_image.webp";

export default function CategoryItem({ category, setEditCategory, setReload }) {
  const { id, category_name, description, created_by } = category;
  const [accessToken, setAccessToken] = useState(null);
  const isAdmin = true; 

  useEffect(() => {
    const access_token = Cookies.get("access_token");
    setAccessToken(access_token);
  }, []);

  const handleDelete = async () => {
    const url = "http://localhost:3000/categories/" + id;
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const res = await axios.delete(url, config);
      console.log(res);
      setReload((oldValue) => oldValue + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 pb-8">
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#">
          <Image
            width={800}
            height={500}
            className="rounded-t-lg"
            src={CategoryImage}
            alt="Category Image"
          />
        </a> */}
        <div className="p-5">
          <a href="/categories/">
            <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {category_name}
            </h5>
          </a>
          <p className="mb-3 text-gray-700 dark:text-gray-400">
            {description || "No description provided"}
          </p>
          <div className="text-sm mb-4 flex items-center justify-between">
            <p className="text-gray-700 dark:text-gray-400">
              Created by:{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {created_by?.username}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Link
              href={`/categories`}
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
            >
              View Courses
              <svg
                className="w-2.5 h-2.5 ml-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </Link>

            {isAdmin && (
              <>
                <button
                  onClick={() => setEditCategory(category)}
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
                >
                  Edit
                  <svg
                    className="w-2.5 h-2.5 ml-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleDelete}
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
                >
                  Delete
                  <svg
                    className="w-2.5 h-2.5 ml-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
