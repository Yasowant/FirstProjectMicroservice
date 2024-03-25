import React, { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/posts");
      setPosts(Object.values(res.data));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const onDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:4000/posts/${postId}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const renderPosts = posts.map((post) => (
    <div
      className="card"
      style={{ width: "30%", marginBottom: "20px" }}
      key={post.id}
    >
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <button onClick={() => onDelete(post.id)} className="btn btn-danger">
            Delete
          </button>
        </h5>
        <p className="card-text">{post.body}</p>
        <CommentList postId={post.id} />
        <CommentCreate postId={post.id} />
      </div>
    </div>
  ));

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {renderPosts}
    </div>
  );
};

export default PostList;
