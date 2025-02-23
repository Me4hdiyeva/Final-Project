import React, { useState } from 'react';
import myImage from "../../img/img.png";
import myImage2 from '../../img/img2.png';
import myImage3 from '../../img/img3.png';
import './photochoose.css';

const PhotoChoose = () => {
    const [selectedImage, setSelectedImage] = useState('image1');

    const images = {
      image1: myImage,
      image2: myImage2,
      image3: myImage3,
    };

  return (
    <>
        <div style={{ textAlign: 'center' }}>
            <div className='img-coin-a'>
                <img className='img-coin-about' src={images[selectedImage]} alt="selected"  />
            </div>
            <div style={{ marginTop: '100px' }}>
                <button onClick={() => setSelectedImage('image1')}>Image 1</button>
                <button onClick={() => setSelectedImage('image2')}>Image 2</button>
                <button onClick={() => setSelectedImage('image3')}>Image 3</button>
            </div>
        </div>
    </>
  );
};

export default PhotoChoose;
