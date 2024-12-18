import React from "react";
import user from "../assets/user.png";

function Question() {
  return (
    <>
      <div className="flex items-center justify-center mb-3">
        <div className="bg-gray-300 rounded-lg px-8 py-3 mx-20 w-full">
          <div className="flex flex-row justify-between mt-2">
            <img
              src={user}
              className="w-16 h-16 bg-white rounded-full aspect-square"
            ></img>
            <div className="w-full mx-6">
              <label
                className="font-bold text-gray-600 block mb-1"
                htmlFor="question"
              >
                Question:
              </label>
              <input
                id="question"
                type="text"
                placeholder="Enter your question"
                className="w-full p-1 mb-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
              />
              <label className="font-bold text-gray-600 block" htmlFor="detail">
                Details:
              </label>
              <textarea
                id="detail"
                placeholder="Enter details"
                rows="2"
                className="w-full p-1 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <button
              className="px-10 py-2 bg-white rounded-full text-gray-700 font-semibold hover:bg-gray-100 shadow"
              onClick={() => alert("Button clicked!")}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Question;
