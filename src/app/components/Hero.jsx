import Image from 'next/image';
import React from 'react';
import heroImage from '../../../public/assets/images/hero-image.png';
import Link from 'next/link';
const Hero = () => {
  return (

    // TODO: min-h ?  assets/images/hero-bg.jpg'
    <section className="bg-[url('/assets/images/hero-bg.jpg')] relative hero-section py-[165px] text-white  w-full bg-cover repeat-no-repeat bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container relative z-10 inner-hero  justify-between gap-4  grid grid-cols-2 items-center ">
        <div className="hero-left">
          <p className="text-white text-opacity-50">SUMMER 2024</p>
          <h1 className="mb-5 leading-[90px] tracking-[0.2px] text-[80px]">
            <span className="block ">Radiate</span>
            <span className="block ">beauty from</span>
            <span className="block ">the inside</span>
          </h1>
          <p className='leading-[30px] mb-5 text-xl'>
            We know how large objects will act,<br /> but things on a small scale.
          </p>
          {/* TODO: */}
          <Link href="/about" className='transition-all duration-500 ease-in inline-flex py-4 px-9 border border-white rounded-[40px] hover:bg-buttonBg' type="button">Read More</Link>
        </div>
        <div className="hero-right">
          <Image className="w-full" src={heroImage} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
