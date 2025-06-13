import React, { useState } from 'react';
import Lightbox from '../Components/LightBox';

const images = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1018/600/400',
];

const LightboxProject = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mt-4 text-center">
      <h4>Mini Project 4: Image Lightbox</h4><br />
      <div className="row mt-3">
        {images.map((src, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <img
              src={src}
              alt={`Thumbnail ${idx + 1}`}
              className="img-fluid rounded shadow-sm"
              onClick={() => setSelectedImage(src)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default LightboxProject;
