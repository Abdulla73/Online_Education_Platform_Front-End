"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ContractFormData {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ViewContract: React.FC = () => {
  const [contractForms, setContractForms] = useState<ContractFormData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/contract-form');
        setContractForms(response.data);
      } catch (error) {
        console.error('Error fetching contract forms:', error);
      }
    };

    fetchData();
  }, []);

  const handleAnswerSubmit = async (contractId: string, answer: string) => {
    try {
      await axios.patch(`http://localhost:3000/contract-form/${contractId}`, { answer });
      // Optionally, you can update the UI or show a success message here
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen">
      {contractForms.map((contractForm) => (
        <div key={contractForm._id} className="mb-6">
          <div className="relative w-full mb-3">
            <label className="text-gray-600 font-bold">{`Name: ${contractForm.name}`}</label>
          </div>
          <div className="relative w-full mb-3">
            <label className="text-gray-600 font-bold">{`Email: ${contractForm.email}`}</label>
          </div>
          <div className="relative w-full mb-3">
            <label className="text-gray-600 font-bold">{`Subject: ${contractForm.subject}`}</label>
          </div>
          <div className="relative w-full mb-3">
            <label className="text-gray-600 font-bold">{`Message: ${contractForm.message}`}</label>
          </div>
          <div className="relative w-full mb-3">
            <input
              type="text"
              name={`answer_${contractForm._id}`}
              id={`answer_${contractForm._id}`}
              className="block py-2 px-3 w-60 rounded-md text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
              placeholder="Answer"
              required
            />
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
              onClick={() => handleAnswerSubmit(contractForm._id, (document.getElementById(`answer_${contractForm._id}`) as HTMLInputElement).value)}
            >
              Submit Answer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewContract;
