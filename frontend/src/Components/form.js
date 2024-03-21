import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const [submission, setSubmission] = useState({
    email: "",
    language: "C++",
    stdin: "",
    source_code: "",
  });

  const handleInput = (e) => {
    e.persist();
    setSubmission({ ...submission, [e.target.name]: e.target.value });
  };

  const saveSubmission = (e) => {
    e.preventDefault();
    const data = {
      email: submission.email,
      language: submission.language,
      stdin: submission.stdin,
      source_code: submission.source_code.substring(0, 100),
    };
    axios.post(`http://localhost:8080/`, data).then((res) => {
      navigate("/submissions");
    });
  };

  const resetForm = () => {
    setSubmission({
      email: "",
      language: "C++",
      stdin: "",
      source_code: "",
    });
  };

  return (
    <div className="container mx-auto p-8 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-8 text-center text-white">
        Submit Your Code
      </h1>
      <form onSubmit={saveSubmission} onReset={resetForm}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleInput}
              value={submission.email}
              autoComplete="email"
              className="mt-1 block w-full rounded-md bg-white border-0 py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="language"
              className="block text-sm font-medium text-white"
            >
              Select Preferred Language
            </label>
            <select
              id="language"
              name="language"
              autoComplete="language"
              onChange={handleInput}
              value={submission.language}
              className="mt-1 block w-full rounded-md bg-white border-0 py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            >
              <option>C++</option>
              <option>Java</option>
              <option>JavaScript</option>
              <option>Python</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="stdin"
              className="block text-sm font-medium text-white"
            >
              Custom Input
            </label>
            <textarea
              name="stdin"
              id="stdin"
              rows={5}
              onChange={handleInput}
              value={submission.stdin}
              autoComplete="stdin"
              className="mt-1 block w-full rounded-md bg-white border-0 py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="source_code"
              className="block text-sm font-medium text-white"
            >
              Write your code here
            </label>
            <textarea
              id="source_code"
              name="source_code"
              rows={20}
              onChange={handleInput}
              value={submission.source_code}
              className="mt-1 block w-full rounded-md bg-white border-0 py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            type="reset"
            className="mr-4 px-6 py-2 text-sm font-semibold text-red-900 bg-red-300 rounded-md hover:bg-red-400 transition duration-300"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 text-sm font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Save
          </button>
        </div>
      </form>
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          <Link to="/submissions">See Submissions</Link>
        </button>
      </div>
    </div>
  );
}
