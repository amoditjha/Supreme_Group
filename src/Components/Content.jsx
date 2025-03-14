"use client"
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const videoData = {
  passenger: [
    { thumbnail: "images/Cabin.png", video: "/videos/video1.mp4" },
    { thumbnail: "images/Commercial 3.png", video: "/videos//video2.mp4" }
  ],
  commercial: [
    { thumbnail: "images/Front.png", video: "/videos/video3.mp4" },
    { thumbnail: "images/Passenger.png", video: "/videos/video4.mp4" }
  ]
};

export default function VehicleSection() {
  const [selectedCategory, setSelectedCategory] = useState("passenger");
  const [selectedVideo, setSelectedVideo] = useState(videoData.passenger[0].video);
  const [scrollProgress, setScrollProgress] = useState(50);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handleThumbnailClick = (video) => {
    setSelectedVideo(video);
  };
    // Add animation variants
    const fadeVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    };
  
    const categoryVariants = {
      active: { color: "#ffffff", scale: 1.05 },
      inactive: { color: "#6b7280", scale: 1 }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / pageHeight) * 100;
      setScrollProgress(progress);
      console.log(progress);
      
      // Add smooth category transition
      requestAnimationFrame(() => {
        let newCategory = progress < 50 ? "passenger" : "commercial";
        if (newCategory !== selectedCategory) {
          setSelectedCategory(newCategory);
          setSelectedVideo(videoData[newCategory][0]?.video);
        }
      });
    };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedCategory]);

  return (
    <div className="flex-col w-full bg-black text-white relative overflow-y-hidden">
      <div className="text-white pb-2 md:text-5xl text-center md:mx-60 py-30 text-2xl px-2">
      Evolving the drive with <span className="font-bold"> 360-degree </span>comprehensive
       solutions
      </div>
      <div className="mx-30 hidden md:flex">
        {/* Left Section */}
        <div className="w-1/3 flex flex-col justify-center items-start pl-10 relative my-30">
        <motion.div 
  className="absolute left-0 top-0 w-1 h-full bg-black overflow-hidden"
  initial={false}
>
  <motion.div
    className="absolute bottom-0 w-full bg-white"
    animate={{
      height: `50%`,
      top: `${scrollProgress>41?90:30}px`
    }}
    transition={{ 
      type: "tween",
      ease: "easeInOut",
      duration: 0.5
    }}
  />
</motion.div>
        <motion.div
            className="px-10 cursor-pointer"
            variants={categoryVariants}
            animate={selectedCategory === "passenger" ? "active" : "inactive"}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedCategory("passenger")}
          >
            <h2 className="text-2xl font-bold">Passenger Vehicles</h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Revving up innovation from interior to exterior.
            </motion.p>
          </motion.div>
          <motion.div
            className="mt-10 px-10 cursor-pointer"
            variants={categoryVariants}
            animate={selectedCategory === "commercial" ? "active" : "inactive"}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedCategory("commercial")}
          >
            <h2 className="text-2xl font-bold">Commercial Vehicles</h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Advancing engineering for heavy-duty vehicles.
            </motion.p>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 flex flex-col justify-center items-center relative">
       
            <motion.div
              key={selectedVideo}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeVariants}
              transition={{ duration: 0.3 }}
              className="w-4/5 h-96 relative"
            >
              <video
                ref={videoRef}
                src={selectedVideo}
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
            </motion.div>
      
          <button 
            onClick={togglePlayPause} 
            className="absolute bottom-4 right-4 w-12 h-12 bg-black rounded-full flex items-center justify-center">
            {isPlaying ? "❚❚" : "▶"}
          </button>
          <div className="flex mt-4 space-x-4">
         
              {videoData[selectedCategory]?.map((item, index) => (
                <motion.img
                  key={item.video}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeVariants}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  src={item.thumbnail}
                  alt="Thumbnail"
                  className="w-20 h-12 cursor-pointer border-2 border-transparent hover:border-white"
                  onClick={() => handleThumbnailClick(item.video)}
                />
              ))}
          
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col items-center text-center p-6">
        <h2 className="text-xl font-semibold text-blue-400">Passenger vehicles</h2>
        <p className="text-gray-300 text-sm mt-2">
          Revving up innovation from interior to exterior.
        </p>
        {/* Video */}
        <video
          src={"videos/video4.mp4"}
          autoPlay
          muted
          className="w-full max-w-xs h-40 object-cover mt-4"
        />
        <p className="mt-2 text-lg">Exterior</p>
      </div>
      <div className="md:hidden flex flex-col items-center text-center p-6">
        <h2 className="text-xl font-semibold text-blue-400">Commercial vehicles</h2>
        <p className="text-gray-300 text-sm mt-2">
          Revving up innovation from interior to exterior.
        </p>
        {/* Video */}
        <video
          src={"videos/video3.mp4"}
          autoPlay
          muted
          className="w-full max-w-xs h-40 object-cover mt-4"
        />
        <p className="mt-2 text-lg">Interior</p>
      </div>
      </div>
      
   
  );
}
