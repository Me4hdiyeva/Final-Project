import React, { useState } from 'react'
import " PhotoChoose.css"

const PhotoChoose = () => {
    const [selectedImage, setSelectedImage] = useState('image1');

    const images = {
      image1: 'https://via.placeholder.com/300?text=Image+1',
      image2: 'https://via.placeholder.com/300?text=Image+2',
      image3: 'https://via.placeholder.com/300?text=Image+3',
    };

  return (
    <>
        <div style={{ textAlign: 'center' }}>
      <div>
        <img src={images[selectedImage]} alt="selected" style={{ width: '300px', height: '300px' }} />
      </div>
      <div>
        <button onClick={() => setSelectedImage('image1')}>Image 1</button>
        <button onClick={() => setSelectedImage('image2')}>Image 2</button>
        <button onClick={() => setSelectedImage('image3')}>Image 3</button>
      </div>
    </div>
      
    </>
  )
}

export default PhotoChoose
