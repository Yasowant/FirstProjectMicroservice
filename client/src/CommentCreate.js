import React, { useState } from "react";
import axios from "axios";
export default ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    window.location.reload();

    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group" >
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            placeholder="Comment Here"
          />
          <button className="btn btn-primary">Submit</button>
        </div>
        
      </form>
    </div>
  );
};
