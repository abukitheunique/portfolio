"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FaCode, 
  FaProjectDiagram, 
  FaTools, 
  FaGitAlt,
  FaRocket,
  FaAward,
  FaUsers,
  FaLightbulb
} from "react-icons/fa";

type StatProps = {
  value: number;
  label: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
  suffix?: string;
};

function Stat({ value, label, icon, color, delay, suffix = "+" }: StatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const stepTime = 30;
    const increment = value / (duration / stepTime);
    let lastUpdateTime = Date.now();

    const easeOutQuad = (t: number) => t * (2 - t); // Easing function

    const updateCount = () => {
      const now = Date.now();
      const deltaTime = now - lastUpdateTime;
      
      if (deltaTime > stepTime) {
        start += increment;
        const progress = Math.min(start / value, 1);
        const easedProgress = easeOutQuad(progress);
        const currentCount = Math.floor(easedProgress * value);
        
        if (currentCount >= value) {
          setCount(value);
        } else {
          setCount(currentCount);
          lastUpdateTime = now;
          requestAnimationFrame(updateCount);
        }
      } else {
        requestAnimationFrame(updateCount);
      }
    };

    // Start animation after delay
    const timer = setTimeout(() => {
      requestAnimationFrame(updateCount);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 }
      }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay / 1000 
      }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 ${color} rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500`}></div>
      
      <div className="relative bg-[#0f172a]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center min-h-[180px] hover:border-white/20 transition-all duration-300">
        {/* Icon with gradient background */}
        <div className={`p-4 rounded-full bg-gradient-to-br ${color.split(' ')[0]} ${color.split(' ')[1]} mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
          <div className="text-white text-2xl">
            {icon}
          </div>
        </div>

        {/* Animated number */}
        <div className="relative">
          <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-1">
            {count}{suffix}
          </h3>
          
          {/* Progress bar */}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-1000"></div>
        </div>

        {/* Label */}
        <p className="mt-3 text-gray-400 text-sm md:text-base text-center font-medium">
          {label}
        </p>

        {/* Decorative dots */}
        <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-1 h-1 rounded-full bg-blue-400"></div>
          <div className="w-1 h-1 rounded-full bg-purple-400"></div>
          <div className="w-1 h-1 rounded-full bg-blue-400"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    {
      value: 3,
      label: "Years Experience",
      icon: <FaRocket />,
      color: "from-blue-500 to-cyan-500",
      delay: 100,
    },
    {
      value: 25,
      label: "Projects Delivered",
      icon: <FaProjectDiagram />,
      color: "from-purple-500 to-pink-500",
      delay: 300,
    },
    {
      value: 20,
      label: "Technologies Mastered",
      icon: <FaTools />,
      color: "from-green-500 to-emerald-500",
      delay: 500,
    },
    {
      value: 500,
      label: "GitHub Contributions",
      icon: <FaGitAlt />,
      color: "from-orange-500 to-red-500",
      delay: 700,
      suffix: "+",
    },
    {
      value: 10,
      label: "Happy Clients",
      icon: <FaUsers />,
      color: "from-indigo-500 to-blue-500",
      delay: 900,
      suffix: "+",
    },
    {
      value: 50,
      label: "Problems Solved",
      icon: <FaLightbulb />,
      color: "from-yellow-500 to-amber-500",
      delay: 1100,
      suffix: "+",
    },
    {
      value: 5,
      label: "Awards Won",
      icon: <FaAward />,
      color: "from-pink-500 to-rose-500",
      delay: 1300,
      suffix: "+",
    },
    {
      value: 10000,
      label: "Lines of Code",
      icon: <FaCode />,
      color: "from-cyan-500 to-blue-500",
      delay: 1500,
      suffix: "+",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#020617] via-[#0a1a3c] to-[#020617]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent" 
           style={{
             backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
             backgroundSize: '50px 50px',
           }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            ACHIEVEMENTS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Numbers That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Tell My Story
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every number represents a milestone in my journey of learning, building, and growing as a developer.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <Stat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              color={stat.color}
              delay={stat.delay}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>

        {/* Interactive Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-[#0f172a]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-300 font-medium">Journey Progress</span>
              <span className="text-blue-400 font-bold">Always Learning</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </motion.div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>Getting Started</span>
              <span>Mastery</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
            <p className="text-gray-400 italic">
              "Code is like humor. When you have to explain it, it's bad."
              <span className="block text-sm text-blue-400 mt-1">- Cory House</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}