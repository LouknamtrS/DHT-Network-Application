/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import user from "../assets/user.png";

function ForumCard({
  id,
  question,
  content,
  username,
  date,
  month,
  year,
  n_fav,
  n_comment,
}) {
  const postData = {
    id: id,
    question: question,
    content: content,
    username: username,
    date: date,
    month: month,
    year: year,
    n_fav: n_fav,
    n_comment: n_comment,
  };

  const handleLocalStorage = () => {
    window.localStorage.setItem("postData", JSON.stringify(postData));
  };

  return (
    <>
      <div className="flex items-center justify-center mb-3">
        <NavLink
          to="/Forum"
          onClick={handleLocalStorage}
          className="bg-gray-300 rounded-lg px-8 py-5 mx-20 w-full hover:cursor-pointer"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={user}
              className="w-16 h-16 bg-white rounded-full aspect-square"
            ></img>
            <div>
              <h3 className="text-xl font-semibold">{username}</h3>
              <span className="text-gray-500 text-sm">
                {date} / {month} / {year}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">{question}</h2>
            <p className="text-gray-600 font-normal text-lg">{content}</p>
          </div>

          <div className="flex items-center justify-start gap-6 mt-4 text-gray-600">
            <div className="fav flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <span>{n_fav}</span>
            </div>
            <div
              className="comment flex items-center gap-1"
              onClick={() => alert("comment sent!")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              <span>{n_comment}</span>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default ForumCard;
