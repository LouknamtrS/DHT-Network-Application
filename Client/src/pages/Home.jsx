import React from 'react';
import Navbar from "../component/Navbar.jsx";


function Home() {
    return(
        <>
            <Navbar/>
            <p class="text-3xl font-semibold my-5 mx-6 px-14">กระทู้คำถาม</p>
            {/* ส่วนที่ตั้งกระทู้เอง */}
            <div className="flex items-center justify-center mb-3">
                <div className="bg-gray-300 rounded-lg px-8 py-3 mx-20 w-full">
                    <div className="flex flex-row justify-between mt-2">

                        <div className="w-16 h-16 bg-white rounded-full m-4 aspect-square"></div> 

                        <div className="w-full mx-6">
                            <label className="font-bold text-gray-600 block mb-1" htmlFor="question">
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
                        <button className="px-4 py-1 bg-white rounded-full text-gray-700 font-semibold hover:bg-gray-100 shadow"  onClick={() => alert('Button clicked!')}>
                            Post
                        </button>
                    </div>
                </div>
            </div>

            {/* ส่วนกระทู้คนอื่น */}
            <div className="flex items-center justify-center mb-3">
                <div className="bg-gray-300 rounded-lg px-8 py-5 mx-20 w-full">

                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-white rounded-full aspect-square"></div>
                        <div>
                        <h3 className="text-xl font-semibold">username</h3>
                        <span className="text-gray-500 text-sm">วัน เวลาที่โพสต์</span>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">
                        Lorem ipsum dolor sit amet, occaecat cupidatat non proident, sunt in culpa qui officia
                        </h2>
                        <p className="text-gray-600 font-normal text-lg">
                        Lorem ipsum dolor sit amet, occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className="flex items-center justify-start gap-6 mt-4 text-gray-600">
                        <div className="fav flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <span>10</span>
                        </div>       
                        <div className="comment flex items-center gap-1" onClick={() => alert('comment sent!')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <span>2</span>
                        </div>           
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;