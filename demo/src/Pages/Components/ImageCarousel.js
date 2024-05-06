import React, { useState , useEffect} from 'react';
import '../Styles/ImageCarousel.css';

const ImageCarousel = ({ images,index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const autoSlide = () => {
    nextImage();
  };

  useEffect(() => {
    const intervalId = setInterval(autoSlide, 3000); 

    return () => clearInterval(intervalId);
  }, [currentImageIndex, autoSlide]);

  return (
    <div className="image-carousel">
      <button onClick={prevImage} className='ltBtn'>&lt;</button>
      <img key={index} src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}/>
      <button onClick={nextImage} className='rtBtn'>&gt;</button>
    </div>
  );
};

export default ImageCarousel;
