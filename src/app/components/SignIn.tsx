'use client';

import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase';
import { useRouter } from 'next/navigation';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res);
      // sessionStorage.setItem('user', true);
      setEmail('');
      setPassword('');
      router.push('/');
    } catch (error) {
      console.error(error, 'error');
    }
  };

  return (
    <div className="max-w-md w-full bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg">
      <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-foreground mb-6">
        Welcome Back
      </h2>

      {/* Gmail Button */}
      <button className="w-full py-3 mb-6 bg-[#23856D] text-white font-medium rounded-md hover:bg-[#1d704b] flex items-center justify-center space-x-2">
        <svg
          width="25"
          height="25"
          viewBox="0 0 47 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47 23.0262C47 35.8639 37.6674 45 23.8852 45C10.6713 45 0 34.9476 0 22.5C0 10.0524 10.6713 0 23.8852 0C30.3189 0 35.7316 2.22278 39.9018 5.88811L33.4008 11.7762C24.8965 4.04637 9.08217 9.85282 9.08217 22.5C9.08217 30.3478 15.7373 36.7077 23.8852 36.7077C33.343 36.7077 36.8873 30.3206 37.4459 27.0091H23.8852V19.2702H46.6244C46.8459 20.4224 47 21.5292 47 23.0262Z"
            fill="#F44336"
          />
        </svg>
        <span> Gmail</span>
      </button>

      {/* OR Separator */}
      <div className="flex items-center justify-center mb-6">
        <hr className="w-full border-gray-300" />
        <span className="px-4 text-gray-600 dark:text-gray-400">OR</span>
        <hr className="w-full border-gray-300" />
      </div>

      {/* Form */}
      <form onSubmit={handleSignIn} className="space-y-6">
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block font-extraboldbold text-sm font-medium text-gray-700 dark:text-foreground mb-1"
          >
            Email address *
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-foreground bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#23856D]"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-foreground mb-1"
          >
            Password *
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-foreground bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#23856D]"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Get Started Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#2CBE70] text-white font-medium rounded-md hover:bg-[#1d704b] transition duration-300"
        >
          Get Started
        </button>
      </form>

      {/* Additional Link */}
      <div className="mt-6 text-center text-sm text-gray-600 font-bold  dark:text-gray-400">
        <p>
          Already have an account?{' '}
          <a
            href="/signup"
            className="text-[#23856D] font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SignIn;
