// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import Question from "../component/Question.jsx";
import ForumCard from "../component/ForumCard.jsx";
import { fetchPosts, fetchFavs } from "../api_request";

function Home() {
  const [forum, setForum] = useState({});
  const [favs, setFavs] = useState({});

  useEffect(() => {
    GetAllForum();
  }, [forum.count]);

  useEffect(() => {
    GetAllFav();
  }, [favs.count]);

  const GetAllForum = async () => {
    try {
      const postsData = await fetchPosts();
      console.log(postsData);
      if (postsData == 0) {
        setForum({});
      } else {
        const reversePostsData = Object.fromEntries(
          Object.entries(postsData.data).reverse()
        );
        setForum(reversePostsData);
      }
    } catch (error) {
      console.error("Error loading posts and comments:", error);
    }
  };

  const GetAllFav = async () => {
    try {
      const favsData = await fetchFavs();
      console.log(favsData);
      if (favsData == 0) {
        setFavs({});
      } else {
        setFavs(favsData.data);
      }
    } catch (error) {
      console.error("Error loading posts and comments:", error);
    }
  };

  // Map through the object values
  const forumCards = Object.values(forum).map((post, index) => {
    const num_fav = Object.values(favs)
      .filter((item) => item.post_id === post.id)
      .map((item) => item.n_fav);
    return (
      <ForumCard
        key={post.id || index} // Use id or index as a fallback for key
        id={post.id}
        question={post.question}
        content={post.content}
        username={post.username}
        date={post.date}
        month={post.month}
        year={post.year}
        n_fav={num_fav}
        n_comment={post.n_comment}
      />
    );
  });

  return (
    <>
      <p className="text-3xl font-semibold my-5 mx-6 px-14">กระทู้คำถาม</p>
      <Question></Question>
      <div className="forum">{forumCards}</div>
    </>
  );
}

export default Home;
