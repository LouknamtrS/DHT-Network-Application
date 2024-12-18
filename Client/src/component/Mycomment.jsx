// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import user from "../assets/user.png";
import { addComment } from "../api_request";

function MyComment() {
  const postData = JSON.parse(window.localStorage.getItem("postData"));

  const [commentData, setCommentData] = useState({
    username: "",
    comment: "",
  });

  const handleChange = (evt) => {
    const id = evt.target.id;
    const value = evt.target.value;
    // console.log(id, value);
    setCommentData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const addData = await addComment(
        commentData.username,
        commentData.comment,
        postData.id
      );
      if (addData.data) {
        console.log(addData.data);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error loading comments and comments:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex-col items-center text-md">
        <div className="flex items-center gap-4 mt-3  ">
          <img
            src={user}
            className="w-16 h-16 bg-white rounded-full aspect-square"
          ></img>
          <div className="font-semibold">
            <input
              id="username"
              type="text"
              placeholder="Username..."
              value={commentData.username}
              onChange={handleChange}
              className="w-5/6  px-4 py-2 rounded-xl border focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>
        </div>
        <div className="relative">
          <input
            id="comment"
            type="text"
            placeholder="Comment..."
            value={commentData.comment}
            onChange={handleChange}
            className="w-5/6  ml-14 px-4 py-2 rounded-full border focus:outline-none focus:ring focus:ring-gray-300"
          />
          <span className="absolute right-44 top-2 text-gray-600 cursor-pointer">
            <svg
              data-slot="icon"
              fill="none"
              className="w-6 h-6"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              onClick={() => {
                document
                  .querySelector("form")
                  .dispatchEvent(
                    new Event("submit", { cancelable: true, bubbles: true })
                  );
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              ></path>
            </svg>
          </span>
        </div>
      </form>
    </>
  );
}

export default MyComment;
