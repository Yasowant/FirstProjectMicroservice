import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostComments = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
                setComments(response.data);
               
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchData();
    }, [postId]); 

    const renderedComments = comments.map(comment => (
        <li key={comment.id}>{comment.content}</li>
    ));

    return <ul>{renderedComments}</ul>;
};

export default PostComments;
