import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";
import CustomCursor from "./CustomCursor";
import can3 from "/images/can3.png";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const canRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const premiumTextRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    // Can Rotation Animation
    gsap.to(canRef.current, {
      rotation: "+=5",
      ease: "none",
      scrollTrigger: {
        trigger: canRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Hero Text Animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
    );

    // Section Scroll Animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Premium Text Animation
    gsap.fromTo(
      premiumTextRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: premiumTextRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animated Statistics Counter
    statsRef.current.forEach((stat, index) => {
      gsap.fromTo(
        stat,
        { innerText: "0" },
        {
          innerText: stat.dataset.value,
          duration: 2,
          roundProps: "innerText",
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.error("Video play error:", error));
    }
  }, []);

  return (
    <div className="w-full text-white relative font-['Bruno_Ace_SC'] bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#232323]">
      <CustomCursor />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col justify-center items-start px-16 max-w-7xl mx-auto">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[1] brightness-100"
        >
          <source src="/videos/black_simbavid.mp4" type="video/mp4" />
        </video>

        <div ref={textRef} className="text-center z-[10]">
          <h1
            className="text-9xl md:text-[140px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500]"
            ref={titleRef}
          >
            BLACK SIMBA
          </h1>
          <p className="text-2xl md:text-4xl mt-6 text-gray-300 max-w-2xl mx-auto">
            The next level of energy. Experience the ultimate fusion of power and sophistication.
          </p>
        </div>
      </div>

      {/* Floating Can */}
      <div className="fixed top-[25vh] right-[-15vw] w-[800px] h-auto drop-shadow-2xl opacity-[0.7]">
        <img
          ref={canRef}
          src={can3}
          alt="Black Simba Can"
          className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="fixed top-[25vh] right-[69vw] w-[800px] h-auto drop-shadow-2xl opacity-[0.7]">
        <img
          ref={canRef}
          src={can3}
          alt="Black Simba Can"
          className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
      {/* Premium Section */}
      <section ref={sectionRef} className="relative w-full py-24 px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-7xl font-bold text-[#FFD700] mb-8 uppercase tracking-wider" ref={premiumTextRef}>
          Black Simba - Your Source of Energy and Vitality!
        </h2>
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
          Black Simba is more than just an energy drink – it’s a lifestyle. Our premium energy booster drink 
          is meticulously crafted to give you the power and stamina you need to conquer your day.
        </p>
      </section>

      {/* 🔥 Animated Statistics Section */}
      <section className="w-full py-24 px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-bold text-white mb-12">Black Simba in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-[#1A1A1A] rounded-xl shadow-lg">
            <h3 className="text-5xl font-bold text-[#FFD700]" ref={(el) => (statsRef.current[0] = el)} data-value="5000">
              0
            </h3>
            <p className="text-xl text-gray-300 mt-4">Cans Sold</p>
          </div>
          <div className="p-8 bg-[#1A1A1A] rounded-xl shadow-lg">
            <h3 className="text-5xl font-bold text-[#FFA500]" ref={(el) => (statsRef.current[1] = el)} data-value="1200">
              0
            </h3>
            <p className="text-xl text-gray-300 mt-4">Happy Customers</p>
          </div>
          <div className="p-8 bg-[#1A1A1A] rounded-xl shadow-lg">
            <h3 className="text-5xl font-bold text-[#FF4500]" ref={(el) => (statsRef.current[2] = el)} data-value="150">
              0
            </h3>
            <p className="text-xl text-gray-300 mt-4">Stores Selling</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <div id="about" className="relative flex flex-col md:flex-row items-center justify-between w-full h-screen px-16 max-w-7xl mx-auto gap-16">
        <div className="flex-1">
          <h2 className="text-7xl font-bold text-white">About Us</h2>
          <p className="text-2xl text-gray-300 mt-4 leading-relaxed">
            Black Simba is more than an energy drink—it's a movement. Designed for the relentless,
            fueled by ambition, and crafted for those who dominate every challenge.
          </p>
        </div>
        <img
          src="/images/about.png"
          alt="Premium Black Simba"
          className="w-[550px] rounded-3xl shadow-2xl"
        />
      </div>

      {/* Call to Action */}
      <div id="cta" className="h-[70vh] flex flex-col justify-center items-start px-16 max-w-7xl mx-auto bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FF4500] rounded-xl shadow-2xl mt-20 z-[10]">
        <h2 className="text-7xl font-bold text-black">Join the Elite</h2>
        <p className="text-2xl text-black mt-4 max-w-lg">
          Elevate your energy game. Experience the ultimate rush of Black Simba today.
        </p>
        <button className="mt-6 px-8 py-3 bg-black text-white font-bold rounded-lg shadow-md hover:bg-gray-800 transition-all text-2xl">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Home;