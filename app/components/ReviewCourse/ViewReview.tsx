"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewReview = () => {
  interface Post {
    Description: string;
    id: number;
    user_name: string;
    count: number;
    isLiked: boolean;
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const isAdmin = true; // Assuming this is a boolean indicating whether the user is an admin

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/coursereview/Admin/coursereview/all"
        );
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

  const handleLikeClick = (id: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              count: post.count + 1,
              isLiked: true,
            }
          : post
      )
    );
  };

  const handleDelete = async (id: number) => {
    try {
      // Assuming you have an endpoint for deleting posts
      await axios.delete(`http://localhost:3000/coursereview/Admin/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {post.user_name}
            </h2>
            {isAdmin && (
              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                Delete
              </button>
            )}
          </div>
          <p className="text-gray-700">{post.Description}</p>
          <div className="flex items-center mt-4">
            <div
              className={`flex items-center text-gray-600 mr-4 cursor-pointer`}
              onClick={() => handleLikeClick(post.id)}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 mr-1 stroke-current"
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

export default ViewReview;
