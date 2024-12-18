import React from "react";
import user from "../assets/user.png";

function Mycomment() {
  return (
    <>
      <div className="flex-col items-center text-md">
        <div className="flex items-center gap-4 mt-3  ">
          <img
            src={user}
            className="w-16 h-16 bg-white rounded-full aspect-square"
          ></img>
          <div className="font-semibold">username</div>
        </div>
        <div className="relative">
          <input
            id="comment"
            type="text"
            placeholder="Comment..."
            className="w-5/6  ml-14 px-4 py-2 rounded-full border focus:outline-none focus:ring focus:ring-gray-300"
          />
          <span className="absolute right-44 top-2 text-gray-600 cursor-pointer">
            <svg
              className="w-6 h-6 "
              onClick={() => alert("Sending Comment")}
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}

export default Mycomment;
