import './Gallery.css';

function Gallery() {
  const photos = [
    "/assets/photo1.jpg",
    "/assets/photo2.jpg",
    "/assets/photo3.jpg",
    "/assets/photo4.jpg",
    "/assets/photo5.jpg",
    "/assets/photo6.jpg"
  ];

  return (
    <section id="gallery" className="gallery-section section">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Memory ${index + 1}`} className="gallery-photo" />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
