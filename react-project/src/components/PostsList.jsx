import { useState } from "react";

import Post from "./Post";
import Newpost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPosthandler(postData) {
    fetch("http://localhost:3030/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((existingPosts) => [postData, ...existingPosts]);
      })
      .catch((error) => console.error("Error:", error));
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <Newpost onCancel={onStopPosting} onAddPost={addPosthandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet. </h2>
          <p>Start adding some</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
