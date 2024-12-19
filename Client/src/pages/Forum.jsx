// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import CommentCard from "../component/CommentCard";
import MyComment from "../component/MyComment";
import user from "../assets/user.png";
import { fetchComments, fetchFavs, fav } from "../api_request";

function Forum() {
  const [comments, setComments] = useState({});
  const [favs, setFavs] = useState({});

  const postData = JSON.parse(window.localStorage.getItem("postData"));
  // console.log(postData);

  useEffect(() => {
    GetAllComment();
  }, [comments.count]);

  useEffect(() => {
    GetAllFav();
  }, [favs.n_fav]);

  const GetAllComment = async () => {
    try {
      const commentsData = await fetchComments();
      // console.log(commentsData.data);
      if (
        commentsData.data &&
        Object.keys(commentsData.data).length > 0 &&
        commentsData != 0
      ) {
        const reversePostsData = Object.fromEntries(
          Object.entries(commentsData.data)
            .filter(([, val]) => val.post_id == postData.id)
            .reverse()
        );

        setComments(reversePostsData);
      } else {
        setComments({});
      }
    } catch (error) {
      console.error("Error loading posts and comments:", error);
    }
  };

  const GetAllFav = async () => {
    try {
      const favsData = await fetchFavs();
      const filtered_fav = Object.values(favsData.data).find(
        (item) => item.post_id === postData.id
      );
      if (!filtered_fav) {
        setFavs({});
      } else {
        setFavs(filtered_fav);
      }
    } catch (error) {
      console.error("Error loading posts and comments:", error);
    }
  };

  const handleFav = async () => {
    try {
      const randomUser = String.fromCharCode(
        97 + Math.floor(Math.random() * 26)
      );
      const addFav = await fav(randomUser, postData.id);
      if (addFav) {
        setFavs(addFav);
        console.log(addFav);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error loading posts and comments:", error);
    }
  };

  const commentCards = Object.values(comments).map((comment, index) => (
    <CommentCard
      key={comment.id || index} // Use id or index as a fallback for key
      id={comment.id}
      username={comment.username}
      comment={comment.comment}
      date={comment.date}
      month={comment.month}
      year={comment.year}
      post_id={comment.post_id}
    />
  ));

  return (
    <>
      <div className="flex-col">
        <p className="text-3xl font-semibold my-5 mx-6 px-14">กระทู้คำถาม</p>
        <div className="flex items-center justify-center mb-3">
          <div className="bg-gray-300  rounded-lg px-8 py-5 mx-20 w-full">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={user}
                className="w-16 h-16 bg-white rounded-full aspect-square"
              ></img>
              <div>
                <div className="text-xl font-semibold">{postData.username}</div>
                <span className="text-gray-500 text-sm">
                  {postData.date}
                  {postData.month}
                  {postData.year}
                </span>
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg mb-4">
                {postData.question}
              </div>
              <div className="text-gray-600 font-normal text-lg mb-4">
                {postData.content}
              </div>
              <div className="flex justify-start item-center gap-6  text-gray-600 ">
                <div
                  className="fav flex items-center gap-1"
                  onClick={handleFav}
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <span>{favs.n_fav ? favs.n_fav : 0}</span>
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
                  <span>{postData.n_comment ? postData : 0}</span>
                </div>
              </div>
            </div>
            <hr className="border-gray-600 mt-3"></hr>
            <div className="comment">{commentCards}</div>
            <MyComment />
          </div>
        </div>
      </div>
    </>
  );
}

export default Forum;
