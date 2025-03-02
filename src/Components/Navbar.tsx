"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Linkedin, Languages } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 lg:px-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="/">
              <span>
                <img
                  src="/logo.jpg"
                  alt="supremelogo"
                  className="h-full !cursor-pointer"
                  loading="eager"
                  height="41"
                  width="148"
                />
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="Options md:flex md:gap-10 gap-3 items-center hidden">
              <button className="bg-[#5cd6ff] px-3 py-1 rounded-full">
                Contact us
              </button>
              <div>
                <Linkedin className="h-5 w-5 text-gray-800" />
              </div>
              <div className="flex">
                <Languages className="h-5 w-5 text-gray-800" />
                <span className="uppercase text-xs text-gray-800">Eng</span>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-secondary focus:outline-none"
            >
              {isOpen ? <X size={24} className="text-gray-800"/> : <Menu size={24} className="text-gray-800"/>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4 py-4">
            
               
                <div>
                  <Linkedin className="h-5 w-5 text-gray-800" />
                </div>
                <div className="flex">
                  <Languages className="h-5 w-5 text-gray-800" />
                  <span className="uppercase text-xs text-gray-800">Eng</span>
                </div>
                <button className="bg-[#5cd6ff] px-3 py-1 rounded-full">
                  Contact us
                </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
