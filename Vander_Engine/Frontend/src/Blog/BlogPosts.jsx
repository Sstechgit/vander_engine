// src/BlogPosts.js
import React, { useState, useEffect } from 'react';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch WordPress posts from the correct REST API endpoint
    fetch('https://vanderengines.com/blog/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching posts: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="blog-post">
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <a href={`/blog/${post.id}`}>Read More</a>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
