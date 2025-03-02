"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="videos/video4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white text-center"
      >
        <p className="font-light pt-2 pb-3  text-lg  xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug">Performace in motion</p>
        <h2 className="text-white font-light pb-2 text-5xl">Soft trims and NVH Solutions</h2>
        <h2  className="text-white font-light pb-2 text-3xl lowercase">For Seemless rides</h2>
      </motion.div>
    </section>
    </>
  );
};

export default Hero;
