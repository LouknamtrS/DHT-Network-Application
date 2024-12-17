import React from "react";
import Navbar from "../component/Navbar";

function Forum() {
  return (
    <>
      <Navbar />
      <div class="flex-col">
        <div class="mt-5">กระทู้คำถาม</div>
        <div class="bg-gray-300 text-gray-600 w-9/12 p-10 mt-5 rounded-md">
          <div class="flex">
            <div class="bg-white  w-[45px] h-[45px] rounded-full"></div>
            <div>Username</div>
            <div>วัน เวลาวันที่โพส</div>
          </div>
          <div class="font-bold text-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            natus. Impedit magni eaque tempore itaque
          </div>
          <div class="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis
            omnis sed fuga pariatur, totam natus aut accusamus maxime amet enim
            quisquam earum exercitationem accusantium fugiat iste odio quasi
            illum?
          </div>
          <div class="font-bold text-l flex">
            <div>like</div>
            comment
          </div>
        </div>
      </div>
    </>
  );
}

export default Forum;
