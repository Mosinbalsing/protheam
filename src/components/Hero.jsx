"use client";
import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import SplitText from "@/reactbits/SplitText/SplitText";
import { motion } from "framer-motion";
import StarBorder from "@/reactbits/StarBorder/StarBorder";

const Hero = () => {
  const mainImgRef = useRef(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [techImages, setTechImages] = useState([]);
  const [floatingIcons, setFloatingIcons] = useState([]);

  const Heading = "Hello all, I'm Mosin";

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const getResponsivePositions = () => {
    const width = window.innerWidth;

    if (width < 640) {
      // Mobile
      return [
        {
          src: "assets/Technology/flutter.png",
          alt: "Flutter",
          x: -150,
          y: -450,
        },
        {
          src: "assets/Technology/mongo.png",
          alt: "MongoDB",
          x: -180,
          y: -350,
        },
        { src: "assets/Technology/mysql2.png", alt: "MySQL", x: 50, y: -520 },
        {
          src: "assets/Technology/js.png",
          alt: "JavaScript",
          x: -200,
          y: -250,
        },
        { src: "assets/Technology/react.png", alt: "React", x: -60, y: -520 },
        {
          src: "assets/Technology/nodejs.png",
          alt: "Node.js",
          x: 100,
          y: -450,
        },
        {
          src: "assets/Technology/tailwind.png",
          alt: "Tailwind",
          x: 120,
          y: -350,
        },
      ];
    } else if (width < 1024) {
      // Tablet
      return [
        {
          src: "assets/Technology/flutter.png",
          alt: "Flutter",
          x: -100,
          y: -675,
        },
        {
          src: "assets/Technology/mongo.png",
          alt: "MongoDB",
          x: -180,
          y: -580,
        },
        { src: "assets/Technology/mysql2.png", alt: "MySQL", x: 180, y: -600 },
        {
          src: "assets/Technology/js.png",
          alt: "JavaScript",
          x: -200,
          y: -460,
        },
        { src: "assets/Technology/react.png", alt: "React", x: 50, y: -675 },
        {
          src: "assets/Technology/nodejs.png",
          alt: "Node.js",
          x: 220,
          y: -460,
        },
        {
          src: "assets/Technology/tailwind.png",
          alt: "Tailwind",
          x: 180,
          y: -320,
        },
      ];
    } else {
      // Desktop
      return [
        {
          src: "assets/Technology/flutter.png",
          alt: "Flutter",
          x: -100,
          y: -675,
        },
        {
          src: "assets/Technology/mongo.png",
          alt: "MongoDB",
          x: -180,
          y: -580,
        },
        { src: "assets/Technology/mysql2.png", alt: "MySQL", x: 180, y: -600 },
        {
          src: "assets/Technology/js.png",
          alt: "JavaScript",
          x: -200,
          y: -460,
        },
        { src: "assets/Technology/react.png", alt: "React", x: 50, y: -675 },
        {
          src: "assets/Technology/nodejs.png",
          alt: "Node.js",
          x: 220,
          y: -460,
        },
        {
          src: "assets/Technology/tailwind.png",
          alt: "Tailwind",
          x: 180,
          y: -320,
        },
      ];
    }
  };

  useLayoutEffect(() => {
    if (mainImgRef.current) {
      const rect = mainImgRef.current.getBoundingClientRect();
      setCenter({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
    setTechImages(getResponsivePositions());
  }, []);

  // Update positions on screen resize
  useEffect(() => {
    const handleResize = () => {
      setTechImages(getResponsivePositions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen px-6 gap-32 lg:gap-8 relative overflow-visible">
      {/* Left Side Text */}
      <div className="text-center md:text-left max-w-2xl z-10">
        <SplitText
          text={Heading}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <p className="text-xl md:text-2xl mt-6 leading-relaxed text-gray-700 dark:text-gray-300">
          &emsp;A passionate Full Stack Developer 🚀 building Web and Mobile
          apps with React, Node.js, Flutter, and more.
        </p>
      
      </div>

      {/* Right Side Tech Icons */}
      <div
        ref={mainImgRef}
        className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
      >
        <img
          src="assets/character/working.png"
          alt="Main Character"
          className="w-full h-full object-contain relative z-10"
        />

        {techImages.map((tech, index) => (
          <motion.img
            key={index}
            src={tech.src}
            alt={tech.alt}
            initial={{
              x: center.x,
              y: center.y - 400,
              opacity: 0,
              position: "absolute",
            }}
            animate={{
              x: center.x + tech.x,
              y: center.y + tech.y,
              opacity: 1,
            }}
            transition={{
              delay: 0.5 + index * 0.3,
              duration: 1,
              ease: "easeOut",
            }}
            onAnimationComplete={() => {
              setFloatingIcons((prev) => [...prev, index]);
            }}
            className={`absolute w-[60px] h-auto transition-transform ${
              floatingIcons.includes(index) ? "" : ""
            }`}
            style={{ zIndex: 1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
