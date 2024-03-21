import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export default function Table() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080").then((response) => {
      console.log(response);
      setCategory(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-6 text-white">
        Submission History
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold tracking-wider"
              >
                Code Language
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold tracking-wider"
              >
                Stdin
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold tracking-wider"
              >
                Source Code
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold tracking-wider"
              >
                Time Of Submission
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {category.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {item.Username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {item.Code_Language}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {item.Stdin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {item.Source_Code}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {item.Time_Of_Submission}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-center">
        <Button color="blue" className="rounded-md shadow-md">
          <Link to="/submit" className="text-white font-semibold">
            Submit another code
          </Link>
        </Button>
      </div>
    </div>
  );
}
