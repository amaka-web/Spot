import React, { useState } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPostForm, setShowPostForm] = useState(false);

  const [name, setName] = useState("Chiamaka Faith");
  const [role, setRole] = useState("Frontend Developer & Designer");
  const [image, setImage] = useState("/images/Avatar@2x.png");

  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostImage, setNewPostImage] = useState("");

  const toggleEdit = () => setIsEditing(!isEditing);
  const togglePostForm = () => setShowPostForm(!showPostForm);

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
      setPosts([...posts, { id: Date.now(), title: newPostTitle, src: newPostImage }]);
      setNewPostTitle("");
      setNewPostImage("");
      setShowPostForm(false);
    }
  };

  return (
    <section className="profile-container">
      {/* Profile Info */}
      <div className="img-details">
        <img src={image} alt="Profile" className="profile-img" />
        <div className="profile-details">
          <h2>{name}</h2>
          <p>{role}</p>

          <div className="edit-profile">
            <button onClick={toggleEdit} className="edit-button">
              <i className="fas fa-pen" style={{ marginRight: "5px" }}></i>
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* New Post Button */}
      <div className="new-post">
        <button className="new-post-button" onClick={togglePostForm}>
          + New Post
        </button>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Profile</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="edit-input"
            />
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Role"
              className="edit-input"
            />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <div className="modal-buttons">
              <button onClick={toggleEdit}>Save</button>
              <button onClick={toggleEdit}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* New Post Modal */}
      {showPostForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Create New Post</h3>
            <input
              type="text"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              placeholder="Post title"
            />
            <input type="file" accept="image/*" onChange={handleNewPostImage} />
            <div className="modal-buttons">
              <button onClick={handleCreatePost}>Add</button>
              <button onClick={togglePostForm}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Gallery */}
      <div className="post-gallery">
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
