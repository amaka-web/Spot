import React, { useState } from "react";

// Profile component handles user profile display, editing, and post creation
export default function Profile() {
  // State for toggling the Edit Profile modal
  const [isEditing, setIsEditing] = useState(false);

  // State for toggling the New Post modal
  const [showPostForm, setShowPostForm] = useState(false);

  // Profile data: name, role, and profile image
  const [name, setName] = useState("Chiamaka Faith");
  const [role, setRole] = useState("Frontend Developer & Designer");
  const [image, setImage] = useState("/images/Avatar@2x.png");

  // Post data: list of posts and current input values for a new post
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostImage, setNewPostImage] = useState("");

  // Toggle the Edit Profile modal on/off
  const toggleEdit = () => setIsEditing(!isEditing);

  // Toggle the New Post form/modal on/off
  const togglePostForm = () => setShowPostForm(!showPostForm);

  // Handle image change for profile (called when user selects a new image file)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file)); // Convert file to a temporary URL
  };

  // Handle image change for new post
  const handleNewPostImage = (e) => {
    const file = e.target.files[0];
    if (file) setNewPostImage(URL.createObjectURL(file));
  };

  // Create a new post and add it to the posts array
  const handleCreatePost = () => {
    if (newPostTitle && newPostImage) {
      setPosts([
        ...posts,
        { id: Date.now(), title: newPostTitle, src: newPostImage }, // Add new post object
      ]);
      setNewPostTitle(""); // Reset form title input
      setNewPostImage(""); // Reset form image input
      setShowPostForm(false); // Close the modal
    }
  };

  return (
    <section className="profile-container">
      {/* Profile Info Section */}
      <div className="img-details">
        {/* Display profile image */}
        <img src={image} alt="Profile" className="profile-img" />

        {/* Display profile name and role */}
        <div className="profile-details">
          <h2>{name}</h2>
          <p>{role}</p>

          {/* Button to open Edit Profile modal */}
          <div className="edit-profile">
            <button onClick={toggleEdit} className="edit-button">
              <i className="fas fa-pen" style={{ marginRight: "5px" }}></i>
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Button to open New Post modal */}
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

            {/* Input field to update name */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="edit-input"
            />

            {/* Input field to update role */}
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Role"
              className="edit-input"
            />

            {/* File input for profile image */}
            <input type="file" accept="image/*" onChange={handleImageChange} />

            {/* Buttons to save or cancel profile edits */}
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

            {/* Input field for post title */}
            <input
              type="text"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              placeholder="Post title"
            />

            {/* File input for post image */}
            <input
              type="file"
              accept="image/*"
              onChange={handleNewPostImage}
            />

            {/* Buttons to add or cancel the new post */}
            <div className="modal-buttons">
              <button onClick={handleCreatePost}>Add</button>
              <button onClick={togglePostForm}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Post Gallery */}
      <div className="post-gallery">
        {/* Loop through posts and render each one */}
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
