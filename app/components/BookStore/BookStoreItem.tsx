'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import bg from "../../../public/book.png";
import Image from "next/image";

function BookStoreItem() {
  const [book, setbook] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/book-store");
        setbook(response.data);
      } catch (error) {
        console.error("Error fetching newcourse:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/book-store/delete/${id}`);
      setbook(book.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };


  return (
    <>
      <div className="flex justify-center items-center h-full">
  <table className="min-w-full divide-y divide-gray-200 py-3">
    <thead>
      <tr>
      <th className="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
          Image
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">
          Title
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Description
        </th>
        <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
          Stock
        </th>
        <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
          Price($)
        </th>
        
      </tr>
    </thead>
    <tbody>
      {book.map((book, index) => (
        <tr key={index} className="bg-black divide-y divide-gray-200">
            <td className="px-5 py-6 whitespace-nowrap">
                <Image src={bg} alt={book.title} className="w-16 h-16" />
            </td>
          <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
          <td className="px-6 py-4 whitespace-nowrap">{book.description}</td>
          <td className="px-6 py-4 whitespace-nowrap">{book.stock}</td>
          <td className="px-6 py-4 whitespace-nowrap">{book.price}</td>

          <td className="px-6 py-4 whitespace-nowrap">
                <a href={`/payment/${book.id}`}>
                  <button className="text-blue-500 hover:text-blue-700">
                    Buy
                  </button>
                </a>
              </td>
          
          {/* <td className="px-6 py-4 whitespace-nowrap">
            <button
              onClick={() => handleDelete(book.id)}
              className="text-red-500 hover:text-red-700 mr-2"
            >
              Delete
            </button>
          </td> */}
        </tr>
      ))}
    </tbody>
  </table>
</div>


    </>
  );
}

export default BookStoreItem;