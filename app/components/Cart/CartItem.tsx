"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function CartItem() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cart");
        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (course_id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${course_id}`);
      setCart(cart.filter((item) => item.course_id !== course_id));
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const handleUpdate = async (course_id, newNoOfItems) => {
    try {
      await axios.patch(`http://localhost:3000/cart/${course_id}`, {
        no_of_items: newNoOfItems,
      });
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.course_id === course_id
            ? { ...item, no_of_items: newNoOfItems }
            : item
        )
      );
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <table className="min-w-full divide-y divide-gray-200 py-3">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">
              Course id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Number of items
            </th>
            <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
              Price
            </th>
            <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
              Created By
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="bg-black divide-y divide-gray-200">
              <td className="px-6 py-4 whitespace-nowrap">{item.course_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.no_of_items}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.created_by.username}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() =>
                    handleUpdate(item.course_id, item.no_of_items + 1)
                  }
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Update +
                </button>
                <button
                  onClick={() =>
                    handleUpdate(item.course_id, item.no_of_items - 1)
                  }
                  className="text-blue-500 hover:text-blue-700"
                >
                  -
                </button>
                <button
                  onClick={() => handleDelete(item.course_id)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  Delete x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartItem;
