'use client'
import axios from 'axios';
import React, { useState } from 'react';

export default function NewCourse() {
  const [coursename, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [coursecategory, setCategory] = useState(" ");
  const [Description, setDescription] = useState(" ");
  const saveclick = async () => {
    try {
      await axios.post("http://localhost:3000/newcourse/create", {
        coursename,
        email,
        coursecategory,
        Description
      });
      alert("Successfully sent the Request!");
    } catch (error) {
      
      console.error("Error while saving:", error);
      
    }
  };
  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
       
      <div>
          <label htmlFor="coursename" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={coursename} id="coursename" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
      </div>
      <div className="max-w-sm mx-auto">
      <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
      <select onChange={(e) => setCategory(e.target.value)} value={coursecategory} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Course Category</option>
        <option value="Design and Creativity">Design and Creativity</option>
        <option value="Technology and Programming">Technology and Programming</option>
        <option value="Science and Engineering">Science and Engineering</option>
        <option value="Business and Entrepreneurship">Business and Entrepreneurship</option>
      </select>
    </div><br></br>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
      </div>

      <div>
     
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description About The Course</label>
      <textarea onChange={(e) => setDescription(e.target.value)} value={Description}  id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

    </div><br></br>


      
    
      <button type="submit" onClick={saveclick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    
  );
}
