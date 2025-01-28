"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/images/logo.png";
import user from "/public/assets/svg/user.svg";
import like from "/public/assets/svg/like.svg";
import basket from "/public/assets/svg/basket.svg";
import { FiMenu, FiX } from "react-icons/fi"; // Importing menu icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Track window size to close the mobile dropdown on desktop view
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Initial window size
    setWindowWidth(window.innerWidth);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Close the mobile menu if the screen width exceeds the breakpoint for mobile
    if (windowWidth >= 768) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  return (
    <header className="min-h-8 w-full bg-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between py-6 px-4 md:px-8">
        {/* Left Section: Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={logo} width={75} height={35} alt="logo" />
          </Link>
        </div>

        {/* Right Section: Basket & Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button className="cursor-pointer">
            <Image src={basket} width={20} height={20} alt="basket icon" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl cursor-pointer">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-[#737373]">
          <Link href="/" className="hover:text-[#252B42]">Home</Link>
          <Link href="/shop" className="hover:text-[#252B42]">Shop</Link>
          <Link href="/about" className="hover:text-[#252B42]">About</Link>
          <Link href="/blog" className="hover:text-[#252B42]">Blog</Link>
          <Link href="/contact" className="hover:text-[#252B42]">Contact</Link>
        </nav>

        {/* Right Section: Login/Register, Basket, Like (Only on Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/signin" className="flex items-center hover:text-[#3D937E]">
            <Image className="mr-1" src={user} width={16} height={16} alt="user icon" />
            Login /
          </Link>
          <Link href="/signup" className="hover:text-[#3D937E]">Register</Link>
          <button className="flex items-center hover:text-[#3D937E] cursor-pointer">
            <Image src={basket} width={16} height={16} alt="basket icon" />
            <span className="ml-1">1</span>
          </button>
          <button className="flex items-center hover:text-[#3D937E] cursor-pointer">
            <Image src={like} width={16} height={16} alt="like icon" />
            <span className="ml-1">1</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col z-50 transition-all duration-300 ease-in-out">
          {/* Mobile Header (Logo + Icons) */}
          <div className="w-full flex justify-between items-center p-4 border-b shadow-md">
            <Link href="/">
              <Image src={logo} width={75} height={35} alt="logo" />
            </Link>
            <div className="flex items-center space-x-4">
              <button className="cursor-pointer">
                <Image src={basket} width={20} height={20} alt="basket icon" />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-gray-700 text-2xl cursor-pointer">
                <FiX />
              </button>
            </div>
          </div>

          {/* Nav Links in Center */}
          <nav className="flex flex-col items-center justify-center flex-grow text-xl text-gray-700 space-y-6">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#252B42]">Home</Link>
            <Link href="/shop" onClick={() => setIsOpen(false)} className="hover:text-[#252B42]">Shop</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#252B42]">About</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-[#252B42]">Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#252B42]">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
