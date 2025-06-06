import React, { useState } from "react";
import "/images/Avatar@2x.png";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Jane Doe");
  const [role, setRole] = useState("Frontend Developer & Designer");
  const [image, setImage] = useState("/images/Avatar@2x.png");

  const [posts, setPosts] = useState([]);
  const [showPostForm, setShowPostForm] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostImage, setNewPostImage] = useState("");

  const toggleEdit = () => setIsEditing(!isEditing);
  const handleNameChange = (e) => setName(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleNewPostImage = (e) => {
    const file = e.target.files[0];
    if (file) setNewPostImage(URL.createObjectURL(file));
  };

  const handleCreatePost = () => {
    if (newPostTitle && newPostImage) {
      const newPost = {
        id: Date.now(),
        title: newPostTitle,
        src: newPostImage,
      };
      setPosts([...posts, newPost]);
      setNewPostTitle("");
      setNewPostImage("");
      setShowPostForm(false);
    }
  };

  const handleCancelPost = () => {
    setNewPostTitle("");
    setNewPostImage("");
    setShowPostForm(false);
  };

  return (
    <section className="profile-container">
      {/* Profile Section */}
      <div className="img-details">
        <div className="profile-img-wrapper">
          <img src={image} alt="Profile" className="profile-img" />
          {isEditing && (
            <input type="file" accept="image/*" onChange={handleImageChange} />
          )}
        </div>

        {/* Editable name and role or display mode */}
        <div className="profile-details">
          {isEditing ? (
            <>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="edit-input"
              />
              <input
                type="text"
                value={role}
                onChange={handleRoleChange}
                className="edit-input"
              />
            </>
          ) : (
            <>
              <h2>{name}</h2>
              <p>{role}</p>
            </>
          )}

          {/* Edit button */}
          <div className="edit-profile">
            <button onClick={toggleEdit} className="edit-button">
              <i className="fas fa-pen"></i> {isEditing ? "Save" : "Edit Profile"}
            </button>

            {/* New Post trigger button */}
            <div className="new-post">
              <button
                className="new-post-button"
                onClick={() => setShowPostForm(true)}
              >
                + New Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Post Modal Popup */}
      {showPostForm && (
        <div className="post-form">
          <h3>Create New Post</h3>
          <input
            type="text"
            placeholder="Post title"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
          />
          <input type="file" accept="image/*" onChange={handleNewPostImage} />

          <div style={{ marginTop: "10px" }}>
            <button onClick={handleCreatePost}>Add Post</button>
            <button onClick={handleCancelPost} style={{ background: "#ccc" }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Post Gallery Section */}
      <div className="gallery">
        {posts.map((post) => (
          <div className="gallery-item" key={post.id}>
            <img src={post.src} alt={post.title} className="post-image" />
            <div className="card-footer">
              <span>{post.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


