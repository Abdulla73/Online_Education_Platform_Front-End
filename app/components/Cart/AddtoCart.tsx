"use client"

import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const AddtoCart = () => {

const [course_id, setcid] = useState('me');
  const [category_id, setcatid] = useState('');
  const [no_of_items, setno] = useState('');
  const [price, setPrice] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async () => {
        try {
          await axios.post("http://localhost:5000/blog", { course_id, category_id, no_of_items, price });
          setSuccessMessage("Post successful");
          setTimeout(() => {
            setSuccessMessage('');
            window.location.reload();
          }, 3000);
        } catch (error) {
          console.error("Error creating post:", error);
        }
      };
  return (
    <div>
      <button onClick={handleSubmit}  type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Add to Cart</button>
    </div>
  )
}

export default AddtoCart
