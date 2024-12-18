import axios from "axios";

const host = "http://192.168.1.55";
const postApiUrl = host + ":3001/posts";
const commentApiUrl = host + ":3002/comments";

// Post service API
export const fetchPosts = async () => {
  try {
    const res = await axios.get(postApiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.data == 0) {
      return 0;
    }

    return res.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const addPost = async (question, content, username) => {
  try {
    const dt = new Date();
    const date = dt.getDate();
    const month = dt.getMonth() + 1;
    const year = dt.getFullYear();

    const res = await axios.post(postApiUrl, {
      question: question,
      content: content,
      username: username,
      date: date,
      month: month,
      year: year,
    });
    if (res.data) {
      return res.data;
    } else {
      throw new Error(`Failed to add post. Status: ${res.status}`);
    }
  } catch (error) {
    console.error(
      "Error adding post:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// Comment service API
export const fetchComments = async () => {
  try {
    const res = await axios.get(commentApiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    
    if (res.data.data == 0) {
      return 0;
    }

    return res.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export const addComment = async (username, comment, post_id) => {
  try {
    const dt = new Date();
    const date = dt.getDate();
    const month = dt.getMonth() + 1;
    const year = dt.getFullYear();

    const res = await axios.post(
      commentApiUrl,
      {
        username: username,
        comment: comment,
        date: date,
        month: month,
        year: year,
        post_id: post_id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);

    if (res.data) {
      console.log(res);
      return res.data;
    } else {
      throw new Error(`Failed to add post. Status: ${res.status}`);
    }
  } catch (error) {
    console.error(
      "Error adding post:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
