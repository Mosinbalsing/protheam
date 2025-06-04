"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "motion/react";
import { useRef } from "react";
import { useTheme } from 'next-themes';
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';

const projects =[
  {
    title: "Cab Booking Website",
    description: "A cab booking platform with OTP verification via SMS, PDF booking confirmations, and dynamic taxi availability system.",
    src: "cab-booking.jpg",
    link: "https://your-cab-booking-demo-link.com",
    color: "#1E90FF",
    github: "https://github.com/mosinbalsing/cab-booking-app",
    live: "https://cab-booking-app.vercel.app/",
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "PDFMake"],
    role: "Full Stack Developer"
  },{
    title: "Ocean Notes",
    description: "A note-sharing platform for students combining Instagram UI and Google Classroom functionality.",
    src: "ocean-notes.jpg",
    link: "https://your-ocean-notes-demo.com",
    color: "#4B7BEC",
    github: "https://github.com/mosinbalsing/ocean-notes",
    live: "https://ocean-notes.vercel.app/",
    technologies: ["React", "Python Flask", "MongoDB", "Tailwind CSS"],
    role: "Full Stack Developer"
  },
  {
    title: "Fladdra Technologies Website",
    description: "Company portfolio website for Fladdra Technologies with responsive layout and contact form integration.",
    src: "fladdra-website.jpg",
    link: "https://fladdra.com",
    color: "#00A86B",
    github: "https://github.com/mosinbalsing/fladdra-website",
    live: "https://fladdra-website.vercel.app/",
    technologies: ["React", "EmailJS", "Tailwind CSS"],
    role: "Frontend Developer"
  },
  {
    title: "Metal Fabrication Website",
    description: "A business website designed for a metal fabrication company showcasing services and inquiry forms.",
    src: "metal-fab.jpg",
    link: "https://metal-fab-demo.com",
    color: "#FFA500",
    github: "https://github.com/mosinbalsing/metal-fab-website",
    live: "https://metal-fab-site.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Developer"
  }
,{
  title: "Gmya Collections",
  description: "A modern e-commerce website for a women's clothing brand featuring product listing, filters, and a secure contact form.",
  src: "gmya-collections.jpg",
  link: "https://gmya.vercel.app/",
  color: "#E75480",
  github: "https://github.com/mosinbalsing/gmya-collections",
  live: "https://gmya.vercel.app/",
  technologies: ["React", "Tailwind CSS", "EmailJS", "Framer Motion"],
  role: "Frontend Developer"
}
,
{
  title: "Courses4U",
  description: "An educational platform offering various online courses with a user-friendly interface and responsive design.",
  src: "courses4u.jpg",
  link: "https://courses4u.vercel.app/",
  color: "#6A5ACD",
  github: "https://github.com/mosinbalsing/courses4u",
  live: "https://courses4u.vercel.app/",
  technologies: ["HTML", "CSS", "JavaScript"],
  role: "Frontend Developer"
}
,
{
  title: "IoT-Based Smart System",
  description: "An IoT project that uses sensors and a microcontroller to monitor and automate environmental parameters such as temperature, light, or motion.",
  src: "iot-project.jpg",
  link: "https://your-iot-demo-link.com",
  color: "#228B22",
  github: "https://github.com/mosinbalsing/iot-smart-system",
  live: "https://iot-smart-system.vercel.app/",
  technologies: ["Arduino", "C/C++", "ESP8266", "ThingSpeak", "React (Dashboard)"],
  role: "Embedded Developer & Dashboard Designer"
}

]

export default function StackCard() {
  const { theme } = useTheme();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className={`min-h-screen ${theme === 'dark' ? 'bg-transparent' : 'bg-white'}`} ref={container}>
        {/* <>
          <section className="text-white  h-[70vh]  w-full bg-slate-950  grid place-content-center ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Stacking Cards Using <br /> Motion. Scroll down! 👇
            </h1>
          </section>
        </> */}

        <section className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} w-full max-w-7xl mx-auto px-4`}>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project?.link}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                github={project?.github}
                live={project?.live}
                technologies={project?.technologies}
                role={project?.role}
              />
            );
          })}
        </section>

        {/* <footer className="group bg-slate-950 ">
          <h1 className="text-[16vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            ui-layout
          </h1>
          <div className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
        </footer> */}
      </main>
    </ReactLenis>
  );
}

export const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  github,
  live,
  technologies,
  role
}) => {
  const { theme } = useTheme();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4"
    >
      <motion.div
        style={{
          backgroundColor: `${color}15`,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-auto md:h-[450px] w-full max-w-4xl mx-auto rounded-xl p-6 md:p-10 origin-top backdrop-blur-lg border border-white/10 shadow-2xl`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
          <div className="flex gap-4">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaGithub size={24} />
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaExternalLinkAlt size={24} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-full mt-5 gap-6 md:gap-10">
          {/* Text Section */}
          <div className="w-full md:w-[40%] relative md:top-[10%]">
            <p className="text-sm mb-4">{description}</p>
            {role && (
              <p className="text-sm font-medium mb-2">Role: {role}</p>
            )}
            {technologies && (
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-xs text-white">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <span className="flex items-center gap-2 pt-2">
              <a href={live} target="_blank" className="underline cursor-pointer hover:opacity-80">
                View Project
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-[60%] h-64 md:h-full rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={url}
                alt={title}
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
