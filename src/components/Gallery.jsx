import React, { useState } from "react";

const galleryImages = [
  { id: 1, src: "/images/Image-1.png", title: "Val Thorens" },
  { id: 2, src: "/images/Image-2.png", title: "Restaurant terrace" },
  { id: 3, src: "/images/Image-3.png", title: "An outdoor cafe" },
  { id: 4, src: "/images/Image-4.png", title: "A very long bridge, over the forest..." },
  { id: 5, src: "/images/Image-5.png", title: "Tunnel with morning light" },
  { id: 6, src: "/images/Image-6.png", title: "Mountain housegi" },
];

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
    {isLiked && (
      <div style={{ color: "red", marginTop: "6px", fontWeight: "600" }}>
        You liked this!
      </div>
    )}
  </div>
);

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
