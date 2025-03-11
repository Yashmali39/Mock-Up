import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "/images/g1.jpg", caption: "Sunset Energy Boost" },
  { src: "/images/g2.jpg", caption: "Adventure in Every Can" },
  { src: "/images/g3.jpg", caption: "City Lights, Maximum Energy" },
  { src: "/images/g4.jpg", caption: "Unleash the Power of Nature" },
  { src: "/images/g5.jpeg", caption: "Calm Before the Surge" },
  { src: "/images/g6.jpeg", caption: "Fuel for the Bold" },
  { src: "/images/g7.jpeg", caption: "Ride the Energy Wave" },
  { src: "/images/g8.jpeg", caption: "Conquer the Peaks of Energy" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen">
      <motion.h2 
        className="text-5xl font-extrabold mb-6 text-center text-orange-500 drop-shadow-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Unleash Your Energy
      </motion.h2>
      <Slider {...settings} className="mx-auto max-w-5xl">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="cursor-pointer p-2 backdrop-blur-lg bg-white/10 rounded-xl shadow-xl hover:shadow-2xl transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <img
              src={img.src}
              alt={`Energy Drink Ad ${index + 1}`}
              className="rounded-lg shadow-lg w-full h-64 object-cover transition-transform hover:scale-110"
              onClick={() => setSelectedImage(img)}
            />
            <p className="text-center text-sm text-gray-300 mt-2 font-semibold">{img.caption}</p>
          </motion.div>
        ))}
      </Slider>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4 z-50 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl max-w-lg shadow-2xl relative border border-white/20"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-red-700 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt="Selected Energy Ad"
              className="rounded-lg max-w-full max-h-[80vh] shadow-xl"
            />
            <p className="text-center text-lg font-bold mt-4 text-orange-400 drop-shadow-md">{selectedImage.caption}</p>
          </motion.div>
        </motion.div>
      )}
      
      {/* Additional content with gradient and animation */}
      <motion.div 
        className="mt-12 p-10 bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 rounded-xl text-center max-w-4xl mx-auto shadow-xl backdrop-blur-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">Fuel Your Passion</h3>
        <p className="text-white text-lg drop-shadow-md">Experience the ultimate energy rush with BlackSimba. Our premium energy drinks are crafted to boost your performance, whether you're hitting the gym, exploring the outdoors, or chasing your dreams.</p>
        <motion.button 
          className="mt-6 px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Explore More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Gallery;