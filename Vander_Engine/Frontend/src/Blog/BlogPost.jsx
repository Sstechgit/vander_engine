// src/BlogPost.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://vanderengines.com/blog/wp-content/posts/${postId}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching post: ", error);
        setLoading(false);
      });
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default BlogPost;
