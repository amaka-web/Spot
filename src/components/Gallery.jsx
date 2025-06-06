import React, { useState } from "react";

// A list of gallery image objects, each with id, src (image path), and title
const galleryImages = [
  { id: 1, src: "/images/Image-1.png", title: "Val Thorens" },
  { id: 2, src: "/images/Image-2.png", title: "Restaurant terrace" },
  { id: 3, src: "/images/Image-3.png", title: "An outdoor cafe" },
  { id: 4, src: "/images/Image-4.png", title: "A very long bridge, over the forest..." },
  { id: 5, src: "/images/Image-5.png", title: "Tunnel with morning light" },
  { id: 6, src: "/images/Image-6.png", title: "Mountain housegi" },
];

// Functional component to render each gallery item
// Props:
// - src: image path
// - title: image title
// - id: unique identifier
// - onLike: function to toggle like
// - isLiked: boolean to show like state
const GalleryItem = ({ src, title, id, onLike, isLiked }) => (
  <div className="gallery-item">
    {/* Display the image */}
    <img src={src} alt={`Gallery ${id}`} className={`img${id}`} />

    {/* Footer with image title and like icon */}
    <div className="card-footer">
      <span>{title}</span>

      {/* Like icon: red if liked, grey if not */}
      <i
        className={`fas fa-heart ${isLiked ? "liked" : ""}`} // Font Awesome heart icon
        onClick={() => onLike(id)} // Call onLike with the image ID when clicked
        style={{ cursor: "pointer" }}
      ></i>
    </div>

    {/* Optional message shown only if the image is liked */}
    {isLiked && (
      <div style={{ color: "red", marginTop: "6px", fontWeight: "600" }}>
        You liked this!
      </div>
    )}
  </div>
);

// Main Gallery component
export default function Gallery() {
  // Track liked images using their IDs
  const [likes, setLikes] = useState([]);

  // Function to toggle like/unlike for an image by its ID
  const onLike = (id) => {
    setLikes((prev) =>
      prev.includes(id)
        ? prev.filter((likeId) => likeId !== id) // Unlike: remove ID
        : [...prev, id] // Like: add ID
    );
  };

  return (
    <section className="gallery">
      {/* Render all gallery images using the GalleryItem component */}
      {galleryImages.map(({ id, src, title }) => (
        <GalleryItem
          key={id}
          id={id}
          src={src}
          title={title}
          onLike={onLike}
          isLiked={likes.includes(id)} // Check if image is liked
        />
      ))}
    </section>
  );
}
