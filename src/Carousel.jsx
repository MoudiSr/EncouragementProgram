import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64 md:h-[40rem] overflow-hidden rounded-xl">
      <motion.div
        className="flex w-full h-full"
        initial={{ x: `-${currentIndex * 100}%` }}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 "
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
          />
        ))}
      </motion.div>
      <motion.button
        className="absolute h-12 top-[45%] left-0 ml-2  px-4 py-2 bg-black bg-opacity-50 text-white rounded-full"
        onClick={prevImage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AiOutlineLeft />
      </motion.button>
      <motion.button
        className="absolute h-12 top-[45%] right-0 mr-2  px-4 py-2 bg-black bg-opacity-50 text-white rounded-full"
        onClick={nextImage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AiOutlineRight />
      </motion.button>
    </div>
  );
};

export default Carousel;
