import React from "react";
import { useState } from "react";

function Posts() {
  // สร้าง state เก็บข้อมูลบทความทั้งหมด
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Paper Clips",
      content:
        "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
      likes: 61,
    },
    {
      id: 2,
      title: "Born to Kill",
      content:
        "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      likes: 46,
    },
    {
      id: 3,
      title: "Ten Shrews, The (Kymmenen riivinrautaa)",
      content:
        "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      likes: 50,
    },
    {
      id: 4,
      title: "Ciel est Ã  vous, Le (Woman Who Dared, The)",
      content: "Maecenas ut massa quis augue luctus tincidunt.",
      likes: 3,
    },
    {
      id: 5,
      title: "Tigger Movie, The",
      content: "Aenean sit amet justo.",
      likes: 66,
    },
    {
      id: 6,
      title: "Cat People",
      content:
        "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      likes: 70,
    },
    {
      id: 7,
      title: "Brooklyn Castle",
      content:
        "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
      likes: 46,
    },
    {
      id: 8,
      title: "Snow Angels",
      content:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
      likes: 1,
    },
    {
      id: 9,
      title: "Rose Tattoo, The",
      content: "Curabitur in libero ut massa volutpat convallis.",
      likes: 20,
    },
    {
      id: 10,
      title: "It's A Wonderful World",
      content:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
      likes: 6,
    },
  ]);
  // สร้าง state สำหรับเก็บข้อมูลโพสต์ใหม่
  const [newPost, setNewPost] = useState("");

  // ฟังก์ชันสำหรับเพิ่มโพสต์ใหม่
  const handleAddPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: Date.now(), content: newPost }]);
    }
    setNewPost("");
  };

  // ฟังก์ชันสำหรับเพิ่มจำนวนไลค์ของโพสต์
  const handleLike = (id) => {
    // ใช้ map เพื่อสร้าง array ใหม่ โดยเพิ่มค่า likes ของโพสต์ที่มี id ตรงกับที่ระบุ
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // ฟังก์ชันสำหรับลดจำนวนไลค์ของโพสต์
  const handleDislike = (id) => {
    // ใช้ map เพื่อสร้าง array ใหม่ โดยลดค่า likes ของโพสต์ที่มี id ตรงกับที่ระบุ
    // มีการตรวจสอบว่าค่า likes ต้องมากกว่า 0 ถึงจะลดได้
    setPosts(
      posts.map((post) =>
        post.id === id && post.likes > 0
          ? { ...post, likes: post.likes - 1 }
          : post
      )
    );
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {/* วนลูปแสดงโพสต์ทั้งหมดจาก state */}
        {posts.map((post) => (
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
              {/* ปุ่มไลค์ เมื่อคลิกจะเรียกฟังก์ชัน handleLike */}
              <button
                className="like-button"
                onClick={() => handleLike(post.id)}
              >
                Like
              </button>
              {/* ปุ่มดิสไลค์ เมื่อคลิกจะเรียกฟังก์ชัน handleDislike */}
              <button
                className="dislike-button"
                onClick={() => handleDislike(post.id)}
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
