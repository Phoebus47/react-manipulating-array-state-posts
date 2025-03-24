import React, { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  const [postLikes, setPostLikes] = useState(postData); 

  const handleLike = (id) => {
    setPostLikes((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDislike = (id) => {
    setPostLikes((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: Math.max(0, post.likes - 1) } : post
      )
    );
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postLikes.map((item) => (
          <div key={item.id} className="post-item">
            <div className="post-header">
              <div className="head">
                <h1>{item.title}</h1>
                  <div>
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{item.likes}</span>
                  </div>
              </div>
              
              <h2>{item.content}</h2>
              <div className="post-social-media-stats">
                
              </div>
            </div>
            <div className="post-actions">
              <button
                className="like-button"
                onClick={() => handleLike(item.id)} 
              >
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => handleDislike(item.id)} 
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
