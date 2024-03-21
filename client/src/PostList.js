import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:4000/posts');
      setPosts(res.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = Object.values(posts).map((post) => (
    <div
      className="card"
      style={{ width: '30%', marginBottom: '20px' }}
      key={post.id}
    >
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  ));

  return <div>{renderPosts}</div>;
};

export default PostList;
