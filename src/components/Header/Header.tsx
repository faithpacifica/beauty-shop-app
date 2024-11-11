import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png';
import user from '../../../public/assets/svg/user.svg';
import like from '../../../public/assets/svg/like.svg';
import basket from '../../../public/assets/svg/basket.svg';

const Navbar: React.FC = () => {
  return (
    // TODO:min-h-?
    <header className='min-h-8'>
      <div className="container flex items-center justify-between py-6 ">
        {/* Left Section: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold">
            <Image src={logo} width={75} height={35} alt="logo" />
          </Link>
        </div>

        {/* Middle Section: Navbar Links */}
        <nav className="flex-1 ml-36 space-x-8 text-[#737373] hover:text-[#252B42]group">
          <Link href="/" className="hover:text-[#252B42]">
            Home
          </Link>
          <Link href="/shop" className="hover:text-[#252B42]">
            Shop
          </Link>
          <Link href="/about" className="hover:text-[#252B42]">
            About
          </Link>
          <Link href="/blog" className="hover:text-[#252B42]">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-[#252B42]">
            Contact
          </Link>
           </nav>

        {/* Right Section: Login/Register, Basket, Heart */}
        <div className="flex items-center ">
          <Link href="/signin" className="inline-flex hover:text-[#3D937E]">
           
            <Image className='mr-1' src={user} width={16} height={16} alt="user icon"/>
            Login /
          </Link>
          <Link href="/signup" className="hover:text-[#3D937E] ml-1">
            {' '}
            Register
          </Link>
          {/* TODO:svg hover make green */}
          <div className="ml-4 flex flex-row  hover:text-[#3D937E]">
            <Image src={basket} width={16} height={16} alt="basket icon" style={{ width: 'auto', height: 'auto' }} />
            <span className="ml-1">1</span>
          </div>

          <div className="ml-4 flex flex-row hover:text-[#3D937E] ">
            <Image src={like} width={16} height={16} alt="like icon" style={{ width: 'auto', height: 'auto' }} />
            <span className="ml-1">1</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
