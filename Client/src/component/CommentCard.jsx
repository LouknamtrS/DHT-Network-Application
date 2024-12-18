/* eslint-disable no-unused-vars */
import React from "react";
import user from "../assets/user.png";

function CommentCard({ id, username, comment, date, month, year }) {
  return (
    <>
      <div className="flex-col  text-md ">
        <div className="flex items-center gap-2 mt-3 mb-1 ">
          <img
            src={user}
            className="w-16 h-16 bg-white rounded-full aspect-square"
          ></img>
          <div></div>
          <div className="font-semibold">{username}</div>
          <span className="text-gray-500 text-sm">
            {date} / {month} / {year}
          </span>
        </div>
        <div className=" w-fit ml-14 px-4 py-2 bg-white rounded-full border focus:outline-none focus:ring focus:ring-gray-300">
          {comment}
        </div>
      </div>
    </>
  );
}

export default CommentCard;
