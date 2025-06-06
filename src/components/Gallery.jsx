import React, { useState } from "react";

// Sample gallery data with id, title, and image src
const galleryImages = [
  { id: 1, src: "/images/Image-1.png", title: "Image 1" },
  { id: 2, src: "/images/Image-2.png", title: "Image 2" },
  { id: 3, src: "/images/Image-3.png", title: "Image 3" },
  { id: 4, src: "/images/Image-4.png", title: "Image 4" },
  { id: 5, src: "/images/Image-5.png", title: "Image 5" },
  { id: 6, src: "/images/Image-6.png", title: "Image 6" },
];

// Gallery item (card)
const GalleryItem = ({ src, title, id, onLike, isLiked }) => (
  <div className="gallery-item">
    <img src={src} alt={`Gallery ${id}`} className={`img${id}`} />
    <div className="card-footer">
      <span>{title}</span>
      <i
        className={`fas fa-heart ${isLiked ? "liked" : ""}`}
        onClick={() => onLike(id)}
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  </div>
);

// Main gallery component
export default function Gallery() {
  const [likes, setLikes] = useState([]);

  const onLike = (id) => {
    setLikes((prev) =>
      prev.includes(id) ? prev.filter((likeId) => likeId !== id) : [...prev, id]
    );
  };

  return (
    <section className="gallery">
      {galleryImages.map(({ id, src, title }) => (
        <GalleryItem
          key={id}
          id={id}
          src={src}
          title={title}
          onLike={onLike}
          isLiked={likes.includes(id)}
        />
      ))}
    </section>
  );
}
