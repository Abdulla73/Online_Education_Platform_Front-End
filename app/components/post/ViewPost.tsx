"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const ViewPost = () => {
  interface Post {
    user_id: number;
    user_name: string;
    description: string;
    count: number;
    isLiked: boolean;
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const isAdmin = true; 
  const access_token = Cookies.get("access_token");
  console.log(access_token);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blog", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
          
        });
        const initialPosts = response.data.map((post: Post) => ({
          ...post,
          count: 0,
          isLiked: false,
        }));
        setPosts(initialPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleLikeClick = (userId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.user_id === userId
          ? {
              ...post,
              count: post.count + 1,
              isLiked: true,
            }
          : post
      )
    );
  };

  const handleDeletePost = async (user_Id: number) => {
    try {
      await axios.delete(`http://localhost:3000/blog/${user_Id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      
      setPosts((prevPosts) =>
        prevPosts.filter((post) => post.user_id !== user_Id)
      );
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/blog/${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSearch} className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={searchQuery}
              onChange={handleChange}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {posts.map((post) => (
        <div
          key={post.user_id}
          className="flex bg-white shadow-lg rounded-lg mx-12 md:mx-auto my-10 max-w-md md:max-w-2x1"
        >
          <div className="flex items-start px-4 py-6">
            <img
              className="w-12 h-12 rounded-full object-cover mr-4 shadow"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                  {post.user_name}
                </h2>
                {isAdmin && <button onClick={() => handleDeletePost(post.user_id)}>Delete</button>}
              </div>
              <p className="mt-3 text-gray-700 text-sm">{post.description}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div
              className={`flex mr-2 text-gray-700 text-sm mr-3 ${
                post.isLiked ? "text-red-500" : ""
              }`}
              onClick={() => handleLikeClick(post.user_id)}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>{post.count}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewPost;