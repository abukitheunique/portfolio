"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaRobot,
  FaLeaf,
  FaUserTie,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaPython,
  FaReact,
  FaNodeJs,
  FaAws,
  FaFigma
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiSocketdotio, SiPrisma } from "react-icons/si";

type Project = {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: { name: string; icon: React.ReactNode; color: string }[];
  features: string[];
  category: 'full-stack' | 'ai' | 'marketplace' | 'platform';
  githubUrl: string;
  liveUrl?: string;
  icon: React.ReactNode;
  accentColor: string;
  gradient: string;
  borderColor: string;
  status: 'completed' | 'in-progress' | 'planned';
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Chatbot Application",
      description: "An intelligent conversational AI assistant with real-time responses",
      fullDescription: "A sophisticated AI chatbot application built with advanced natural language processing capabilities. Features include context-aware conversations, sentiment analysis, multi-language support, and integration with various AI models for intelligent responses.",
      technologies: [
        { name: "Python", icon: <FaPython />, color: "from-yellow-500 to-amber-500" },
        { name: "React", icon: <FaReact />, color: "from-blue-400 to-cyan-400" },
        { name: "Node.js", icon: <FaNodeJs />, color: "from-green-500 to-emerald-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "from-green-600 to-lime-600" },
        { name: "Socket.IO", icon: <SiSocketdotio />, color: "from-gray-600 to-gray-800" },
      ],
      features: [
        "Real-time conversational AI",
        "Context memory & history",
        "Multi-language support",
        "Sentiment analysis",
        "Voice interaction capabilities",
        "Custom AI model integration"
      ],
      category: 'ai',
      githubUrl: "https://github.com/yourusername/ai-chatbot",
      liveUrl: "https://chatbot.abuki.dev",
      icon: <FaRobot />,
      accentColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      status: 'completed'
    },
    {
      id: 2,
      title: "AgriLink 🌱",
      description: "Digital marketplace connecting Ethiopian farmers, buyers, and administrators",
      fullDescription: "A comprehensive digital platform revolutionizing agricultural trade in Ethiopia. AgriLink enables transparent trading, efficient order management, and secure payment processing in a multilingual environment. The platform bridges the gap between rural farmers and urban markets while supporting local agriculture.",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "from-gray-800 to-black" },
        { name: "TypeScript", icon: <FaCode />, color: "from-blue-500 to-blue-700" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-teal-400 to-cyan-400" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "from-blue-600 to-indigo-600" },
        { name: "Prisma", icon: <SiPrisma />, color: "from-emerald-500 to-teal-500" },
      ],
      features: [
        "Multi-language support (Amharic, English)",
        "Secure payment integration",
        "Real-time order tracking",
        "Farmer verification system",
        "Mobile-responsive design",
        "Admin dashboard for management"
      ],
      category: 'marketplace',
      githubUrl: "https://github.com/yourusername/agrilink",
      liveUrl: "https://agrilink.et",
      icon: <FaLeaf />,
      accentColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      status: 'completed'
    },
    {
      id: 3,
      title: "Intern Finder",
      description: "Full‑stack platform connecting interns and companies",
      fullDescription: "A comprehensive recruitment platform designed specifically for internship opportunities. Connects students and recent graduates with companies offering internships. Features include advanced filtering, application tracking, company profiles, and skill matching algorithms to ensure the best matches.",
      technologies: [
        { name: "React", icon: <FaReact />, color: "from-blue-400 to-cyan-400" },
        { name: "Node.js", icon: <FaNodeJs />, color: "from-green-500 to-emerald-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "from-green-600 to-lime-600" },
        { name: "AWS", icon: <FaAws />, color: "from-orange-500 to-yellow-500" },
        { name: "Figma", icon: <FaFigma />, color: "from-pink-500 to-purple-500" },
      ],
      features: [
        "Smart matching algorithm",
        "Resume parsing & analysis",
        "Application tracking system",
        "Company review system",
        "Interview scheduling",
        "Real-time notifications"
      ],
      category: 'platform',
      githubUrl: "https://github.com/yourusername/intern-finder",
      liveUrl: "https://internfinder.dev",
      icon: <FaUserTie />,
      accentColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      status: 'completed'
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with AI-powered recommendations",
      fullDescription: "A full-featured e-commerce platform with advanced product discovery, AI-powered recommendations, and seamless checkout experience. Built with scalability in mind to handle high traffic and complex inventory management.",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "from-gray-800 to-black" },
        { name: "TypeScript", icon: <FaCode />, color: "from-blue-500 to-blue-700" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "from-blue-600 to-indigo-600" },
        { name: "Redis", icon: <FaDatabase />, color: "from-red-500 to-orange-500" },
        { name: "Docker", icon: <FaServer />, color: "from-blue-400 to-cyan-400" },
      ],
      features: [
        "AI product recommendations",
        "Real-time inventory management",
        "Multi-payment gateway support",
        "Advanced search & filtering",
        "Wishlist & cart functionality",
        "Order tracking & analytics"
      ],
      category: 'full-stack',
      githubUrl: "https://github.com/yourusername/ecommerce",
      icon: <FaMobileAlt />,
      accentColor: "bg-gradient-to-r from-orange-500 to-red-500",
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      status: 'in-progress'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length, icon: <FaRobot /> },
    { id: 'marketplace', label: 'Marketplace', count: projects.filter(p => p.category === 'marketplace').length, icon: <FaLeaf /> },
    { id: 'platform', label: 'Platform', count: projects.filter(p => p.category === 'platform').length, icon: <FaUserTie /> },
    { id: 'full-stack', label: 'Full Stack', count: projects.filter(p => p.category === 'full-stack').length, icon: <FaCode /> },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-[#020617] via-[#0a1a3c] to-[#020617] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px',
             }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
              MY PORTFOLIO
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Projects That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Make</span>{" "}
              a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Difference</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              From AI-powered solutions to impactful platforms, each project represents my dedication to solving 
              real-world problems with innovative technology.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.icon && <span className="text-lg">{category.icon}</span>}
                {category.label}
                <span className={`px-2 py-1 text-xs rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-white/5'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                {/* Project Card */}
                <div className={`relative h-full bg-gradient-to-br ${project.gradient} backdrop-blur-sm border ${project.borderColor} rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-white/40 group-hover:shadow-2xl group-hover:shadow-blue-500/10`}>
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'completed' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : project.status === 'in-progress'
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {project.status === 'completed' ? '✓ Completed' : 
                       project.status === 'in-progress' ? '⚡ In Progress' : '🕒 Planned'}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    {/* Project Icon */}
                    <div className={`inline-flex p-4 rounded-2xl ${project.accentColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-2xl text-white">
                        {project.icon}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-300 mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech.name}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300`}
                        >
                          {tech.name}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div className="flex items-center gap-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                          aria-label="View on GitHub"
                        >
                          <FaGithub className="text-xl" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                            aria-label="View Live Demo"
                          >
                            <FaExternalLinkAlt className="text-xl" />
                          </a>
                        )}
                      </div>
                      <button className="text-sm text-gray-400 hover:text-white group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                        View Details
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Total Projects", value: projects.length, color: "from-blue-500 to-cyan-500" },
              { label: "Technologies Used", value: 20, color: "from-purple-500 to-pink-500" },
              { label: "Code Commits", value: "500+", color: "from-green-500 to-emerald-500" },
              { label: "Happy Clients", value: "10+", color: "from-orange-500 to-red-500" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-gradient-to-br ${stat.color}/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center`}
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl border border-white/10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-300"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl ${selectedProject.accentColor}`}>
                    <div className="text-3xl text-white">
                      {selectedProject.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProject.status === 'completed' 
                          ? 'bg-green-500/20 text-green-300'
                          : selectedProject.status === 'in-progress'
                          ? 'bg-yellow-500/20 text-yellow-300'
                          : 'bg-blue-500/20 text-blue-300'
                      }`}>
                        {selectedProject.status === 'completed' ? 'Completed' : 
                         selectedProject.status === 'in-progress' ? 'In Progress' : 'Planned'}
                      </span>
                      <span className="text-gray-400">
                        {selectedProject.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className={`w-2 h-2 rounded-full ${selectedProject.accentColor}`} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm border border-white/10`}
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <FaGithub className="text-xl" />
                  View Code on GitHub
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                    Live Demo
                  </a>
                )}
                <button
                  onClick={closeProjectModal}
                  className="px-6 py-3 border border-white/20 hover:border-white/40 text-gray-300 hover:text-white rounded-xl transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}