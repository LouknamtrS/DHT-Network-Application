import React from "react";
import Navbar from "../component/Navbar.jsx";
import Question from "../component/Question.jsx";
import OtherForum from "../component/OtherForum.jsx";

function Home() {
  return (
    <>
      <p class="text-3xl font-semibold my-5 mx-6 px-14">กระทู้คำถาม</p>
      {/* ส่วนที่ตั้งกระทู้เอง */}
      <Question></Question>
      {/* ส่วนกระทู้คนอื่น */}
      <OtherForum></OtherForum>
    </>
  );
}

export default Home;
