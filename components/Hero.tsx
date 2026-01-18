"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
  "Full-Stack Developer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    if (!isDeleting && charIndex < currentRole.length) {
      // Typing
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentRole.length) {
      // Finished typing, wait then start deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(timeout);
    } else if (isDeleting && text.length > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && text.length === 0) {
      // Finished deleting, move to next role
      setIsDeleting(false);
      setCharIndex(0);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, roleIndex, text, isDeleting]);

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/abukitheunique", color: "hover:text-white" },
    { icon: <FaInstagram />, href: "https://instagram.com/abukitheunique", color: "hover:text-pink-400" },
    { icon: <FaTelegramPlane />, href: "https://t.me/abukitheunique", color: "hover:text-blue-400" },
    { icon: <FaEnvelope />, href: "mailto:abubekerassefayesuf@gmail.com", color: "hover:text-red-400" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-10 pb-16 md:pt-40 flex items-center justify-center px-4 md:px-8 bg-gradient-to-br from-[#020617] via-[#020617] to-[#0a1a3c] overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Image (LEFT) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center order-2 md:order-1"
        >
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-3xl opacity-30 animate-pulse" />
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-spin-slow">
              <div className="h-full w-full rounded-full bg-[#020617]"></div>
            </div>
            <img
              src="/profile.png"
              alt="Abubeker"
              className="relative w-full h-full rounded-full object-cover border-4 border-transparent"
            />
          </div>
        </motion.div>

        {/* Text (RIGHT) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Abubeker</span>
          </h1>

          <div className="mt-6 text-xl md:text-2xl text-gray-300 h-10 flex items-center justify-center md:justify-start">
            <span className="mr-2">I am a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold min-w-[240px] text-left">
              {text}
              <span className="ml-1 animate-pulse">|</span>
            </span>
          </div>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Passionate developer crafting beautiful, functional web experiences. 
            I bring ideas to life with clean code and modern technologies.
          </p>

          {/* Social Icons */}
          <div className="mt-10 flex gap-6 text-2xl justify-center md:justify-start">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.5 }}
                className={`p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 ${link.color} transition-all duration-300 hover:bg-white/10 hover:scale-110`}
                aria-label={`Follow on ${link.icon.type.name}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="/projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 text-center"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 text-center"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}