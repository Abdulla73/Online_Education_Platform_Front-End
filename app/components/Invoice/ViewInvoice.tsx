"use client";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useEffect, useState } from "react";
const access_token = Cookies.get("access_token");

const ViewInvoice = () => {
  const [invoices, setInvoices] = useState([]);
  const isAdmin = true;

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blog", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        setInvoices(response.data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, []);

  const handleDeleteInvoice = async (invNumber: string) => {
    try {
      await axios.delete(`http://localhost:3000/invoice/${invNumber}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setInvoices((prevInvoices) =>
        prevInvoices.filter((invoice) => invoice.inv_number !== invNumber)
      );
    } catch (error) {
      console.error("Error deleting invoice:", error);
    }
  };

  const groupedInvoices = invoices.reduce<{ [key: string]: any[] }>(
    (acc, invoice) => {
      const { transactionId } = invoice;
      if (!acc[transactionId]) {
        acc[transactionId] = [];
      }
      acc[transactionId].push(invoice);
      return acc;
    },
    {}
  );

  return (
    <div>
      {Object.keys(groupedInvoices).map((transactionId) => (
        <div
          key={transactionId}
          className="flex h-screen w-full items-center justify-center bg-gray-600"
        >
          <div className="w-80 rounded bg-gray-50 px-6 pt-8 shadow-lg">
            {isAdmin && (
              <button
                type="button"
                onClick={() =>
                  handleDeleteInvoice(
                    groupedInvoices[transactionId][0].inv_number
                  )
                }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Delete
              </button>
            )}
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="relative w-20 h-16">
                <Image
                  src="/edumastery-logo.png"
                  alt="Edu Mastery Logo"
                  layout="fill"
                />
              </div>
              <h4 className="font-semibold">Edu Mastery</h4>
            </div>
            {groupedInvoices[transactionId].map((invoice, index) => (
              <div
                key={`${transactionId}-${index}`}
                className="flex flex-col gap-3 border-b py-6 text-xs"
              >
                {index === 0 && (
                  <>
                    <p className="flex justify-between">
                      <span className="text-gray-400">Invoice Number:</span>
                      <span>#{invoice.inv_number}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-400">Customer Name:</span>
                      <span>{invoice.customerName}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-400">Email:</span>
                      <span>{invoice.email}</span>
                    </p>
                    <div className="flex flex-col gap-3 pb-6 pt-2 text-xs">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="flex">
                            <th className="w-full py-2 font-bold text-lg">
                              Product
                            </th>
                            <th className="min-w-[44px] py-2 font-bold text-lg">
                              Price
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </>
                )}
                <div className="flex flex-col gap-1 text-xs">
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="flex">
                        <td className="flex-1">{invoice.courseName}</td>
                        <td className="min-w-[44px]">${invoice.paidAmount}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewInvoice;
