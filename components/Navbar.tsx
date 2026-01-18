"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#020617]/90 backdrop-blur-lg border-b border-blue-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-bold text-xl tracking-wider group"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              ABUKI
            </span>
            <span className="text-white">.dev</span>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl p-2 hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-[#020617] border-l border-blue-500/20 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-20 flex items-center justify-end px-6 border-b border-blue-500/20">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl p-2 hover:text-blue-400"
              aria-label="Close menu"
            >
              <FiX />
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white text-lg py-3 border-b border-blue-500/10 hover:border-blue-400 transition-all duration-300 hover:translate-x-2"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}