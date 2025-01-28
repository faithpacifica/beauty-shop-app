import Image from 'next/image';
import React from 'react';
import heroImage from '../../../public/assets/images/hero-image.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-[url('/assets/images/hero-bg.jpg')] relative hero-section py-[100px] md:py-[165px] text-white w-full bg-cover bg-no-repeat bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container relative z-10 inner-hero grid grid-cols-1 md:grid-cols-2 justify-between gap-8 md:gap-4 items-center px-4 sm:px-6 md:px-8">
        {/* Left Section */}
        <div className="hero-left text-center md:text-left">
          <p className="text-white text-opacity-50 text-sm md:text-base lg:text-lg">
            SUMMER 2024
          </p>
          <h1 className="mb-5 leading-[50px] md:leading-[70px] lg:leading-[90px] tracking-[0.2px] text-[40px] md:text-[60px] lg:text-[80px]">
            <span className="block">Radiate</span>
            <span className="block">beauty from</span>
            <span className="block">the inside</span>
          </h1>
          <p className="leading-[24px] md:leading-[30px] mb-5 text-base md:text-lg lg:text-xl">
            We know how large objects will act,<br /> but things on a small scale.
          </p>
          <Link
            href="/about"
            className="transition-all duration-500 ease-in inline-flex py-3 px-6 md:py-4 md:px-9 border border-white rounded-[40px] hover:bg-buttonBg"
            type="button"
          >
            Read More
          </Link>
        </div>

        {/* Right Section */}
        <div className="hero-right flex justify-center md:justify-end">
          <Image className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto" src={heroImage} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
