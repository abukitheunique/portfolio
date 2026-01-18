"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools, FaRocket } from "react-icons/fa";

export default function AboutSection() {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-blue-400" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-purple-400" />,
      skills: ["Node.js", "Express", "NestJS", "REST APIs", "GraphQL", "Authentication"],
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Database & DevOps",
      icon: <FaDatabase className="text-green-400" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "CI/CD"],
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
    },
    {
      title: "Tools & Others",
      icon: <FaTools className="text-yellow-400" />,
      skills: ["Git", "Prisma", "Postman", "Figma", "Jest", "Webpack"],
      color: "from-yellow-500/20 to-yellow-600/20",
      borderColor: "border-yellow-500/30",
    },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-[#020617] to-[#0a1a3c] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            ABOUT ME
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A Glimpse Into My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Developer Journey
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative group">
              {/* Decorative card */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
              <div className="relative bg-[#020617]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                    <FaRocket className="text-2xl text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">My Philosophy</h2>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a passionate{" "}
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Full-Stack Developer
                  </span>{" "}
                  who thrives on turning complex challenges into elegant, scalable solutions. 
                  With a strong foundation in both frontend and backend technologies, 
                  I build applications that are not just functional, but delightful to use.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  My approach combines clean code architecture with modern design principles, 
                  ensuring that every project is maintainable, performant, and future-proof. 
                  I believe that great software is built at the intersection of technical 
                  excellence and user empathy.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">50+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">3+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>🎓 B.S. in Computer Science</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>📍 Based in Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>💼 Open to freelance opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>🎯 Specialized in Next.js stack</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tech Stack</span>
              </h2>
              <p className="text-gray-400">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            <div className="grid gap-6">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-br ${group.color} backdrop-blur-sm border ${group.borderColor} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-2 text-sm font-medium rounded-full bg-white/5 border ${group.borderColor} text-gray-300 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learning Next */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
            >
              <h4 className="text-lg font-semibold text-white mb-2">Currently Exploring</h4>
              <p className="text-gray-400">
                Deepening my knowledge in <span className="text-blue-400">React Native</span>,{" "}
                <span className="text-purple-400">GraphQL Subscriptions</span>, and{" "}
                <span className="text-green-400">Microservices Architecture</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              View My Projects
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
            >
              Let's Collaborate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}