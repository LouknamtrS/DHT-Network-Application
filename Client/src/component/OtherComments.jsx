import React from "react";
import user from "../assets/user.png";

function OtherComments() {
  return (
    <>
      <div className="flex-col  text-md ">
        <div className="flex items-center gap-2 mt-3 mb-1 ">
          <img
            src={user}
            className="w-16 h-16 bg-white rounded-full aspect-square"
          ></img>
          <div></div>
          <div className="font-semibold">username</div>
          <span className="text-gray-500 text-sm">วัน เวลาที่โพสต์</span>
        </div>
        <div className=" w-fit ml-14 px-4 py-2 bg-white rounded-full border focus:outline-none focus:ring focus:ring-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
      </div>
    </>
  );
}

export default OtherComments;
