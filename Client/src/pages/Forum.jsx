import React from "react";
import Navbar from "../component/Navbar";

function Forum() {
  return (
    <>
      <Navbar />
      <div className="flex-col">
        <p className="text-3xl font-semibold my-5 mx-6 px-14">กระทู้คำถาม</p>
        <div className="flex items-center justify-center mb-3">
          <div className="bg-gray-300  rounded-lg px-8 py-5 mx-20 w-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white  w-[45px] h-[45px] rounded-full"></div>
              <div>
                <div className="text-xl font-semibold">username</div>
                <span className="text-gray-500 text-sm">วัน เวลาที่โพสต์</span>
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                natus. Impedit magni eaque tempore itaque
              </div>
              <div className="text-gray-600 font-normal text-lg mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                nobis omnis sed fuga pariatur, totam natus aut accusamus maxime
                amet enim quisquam earum exercitationem accusantium fugiat iste
                odio quasi illum?
              </div>
              <div className="flex justify-start item-center gap-6  text-gray-600 ">
                <div
                  className="fav flex items-center gap-1"
                  onClick={() => alert("Like This!")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <span>10</span>
                </div>
                <div
                  className="comment flex items-center gap-1"
                  onClick={() => alert("comment sent!")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                  <span>2</span>
                </div>
              </div>
            </div>
            <hr className="border-gray-600 mt-3"></hr>

            {/* ส่วน comment */}
            <div className="flex-col  text-md ">
              <div className="flex items-center gap-2 mt-3 mb-1 ">
                <div className="bg-white  w-[40px] h-[40px] rounded-full"></div>
                <div></div>
                <div className="font-semibold">username</div>
                <span className="text-gray-500 text-sm">วัน เวลาที่โพสต์</span>
              </div>
              <div className=" w-fit ml-14 px-4 py-2 bg-white rounded-full border focus:outline-none focus:ring focus:ring-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </div>
            </div>
            <div className="flex-col items-center text-md">
              <div className="flex items-center gap-4 mt-3  ">
                <div class="bg-white  w-[40px] h-[40px] rounded-full"></div>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Forum;
