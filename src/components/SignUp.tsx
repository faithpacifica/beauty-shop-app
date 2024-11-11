"use client"; 
import React from 'react';

const SignUp: React.FC = () => {
  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up for Free</h2>
        <p className="mt-2 text-center text-gray-600">Try everything free for 30 days, no payment details required</p>

        <button
          className="w-full py-2 mt-6 font-semibold text-white rounded-md bg-[#23856D] hover:bg-[#1f7a5f] transition duration-200"
        >
          Continue with Gmail
        </button>

        <p className="my-4 text-center text-gray-600">OR</p>

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder='Full Name * '
            className="w-full px-4 py-2 mt-1 border !bg-[#F9F9F9] border-gray-300 rounded-md focus:ring-[#23856D] focus:border-[#23856D]"
            />
          </div>



          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
            className="w-full px-4 py-2 mt-1 border !bg-[#F9F9F9] border-gray-300 rounded-md  focus:border-[#23856D]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            className="w-full px-4 py-2 mt-1 border !bg-[#F9F9F9] border-gray-300 rounded-md  focus:border-[#23856D]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white  rounded-md bg-[#2CBE70] hover:bg-opacity-70 transition duration-200"
          >
            Get Started
          </button>
        </form>

        <p className="mt-4 text-xs text-center text-gray-600">
          By filling in the form above and clicking the “Get Started” button, you accept and agree to our{' '}
          <a href="#" className="text-[#23856D] underline">Terms of Service</a> and{' '}
          <a href="#" className="text-[#23856D] underline">Privacy Policy</a>.
        </p>

        <p className="mt-4 text-center font-bold text-gray-600">
          Already have an account?{' '}
          <a href="#" className="text-[#23856D] font-bold">Sign in</a>
        </p>
      </div>
    // {/* </div> */}
  );
};

export default SignUp;
