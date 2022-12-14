import React, { useEffect, useState } from 'react';
import image from './assets/tr.jpg';
import image0 from './assets/tr0.jpg';
import image1 from './assets/tr1.jpg';
import image2 from './assets/tr2.jpg';
import image3 from './assets/tr3.jpg';
import image4 from './assets/tr4.jpg';
import image5 from './assets/tr5.jpg';
import image6 from './assets/alatoo logo.jpg';
import '../App.css';


const Image = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image,image0, image1, image2, image3, image4, image5])
  
  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage > 3 ? selectedImage + 1 : 0)
    }, 99999)
  }, [])

  return (
    <div className='position'>
      <h1>TURKIYE</h1>
      <p>Click the buttons to travel around TURKIYE !</p>
      <br />
      <img src={allImages[selectedImage]} alt="flag" className='image'/>
      <div>
      <button
        onClick={() => {
          if (selectedImage > 0)
            setSelectedImage(selectedImage - 1)
        }}
        className='btn'
      >Prev</button>
      <button
      onClick={() => {
        if (selectedImage < allImages.length -1 ) 
        setSelectedImage(selectedImage + 1)
      }}
       className='btn'>Next
       </button>

      </div>
      <img src={image6} alt="logo" width={60} className="logo"/>
    </div>
  )
}

export default Image