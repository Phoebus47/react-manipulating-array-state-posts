import { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  const [postsList, setPostsList] = useState(postData);

  const likePost = (postId) => {
    setPostsList((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const dislikePost = (postId) => {
    setPostsList((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId && post.likes > 0 ? { ...post, likes: post.likes - 1 } : post
      )
    );
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postsList.map((post) => (
          <div className="post-item" key={post.id}>
            <div className="post-header">
              <h2>{post.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{post.likes}</span>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button className="like-button" onClick={() => likePost(post.id)}>
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => dislikePost(post.id)}
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
