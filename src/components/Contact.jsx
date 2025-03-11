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
    <div className="p-10 bg-black text-white min-h-screen">
      <motion.h2
        className="text-5xl font-extrabold mb-8 text-center text-orange-500 drop-shadow-xl"
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
            className="cursor-pointer p-2 bg-white/10 rounded-xl shadow-xl hover:shadow-2xl transition-transform"
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

      {/* Image Pop-Up */}
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

      <Contact />
    </div>
  );
};

const Contact = () => {
  return (
    <motion.div
      className="mt-12 p-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-center max-w-3xl mx-auto shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-4xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">Get in Touch</h3>
      <p className="text-white text-lg mb-6">
        We’d love to hear from you! Whether you have questions, feedback, or just want to say hi, reach out to us.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all h-32"
        ></textarea>
        <motion.button
          className="mt-4 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Gallery;