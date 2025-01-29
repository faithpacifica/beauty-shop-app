'use client';

import { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, googleAuthProvider } from '@/app/firebase';
import { useRouter } from 'next/navigation';
import GoogleIcon from './icons/GoogleIcon';
import ReusableInput from '@/common/UI/ReusableInput';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithGoogle();
      console.log(res);
      router.push('/');
    } catch (error) {
      console.error(error, 'Google sign-in failed');
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res);
      // sessionStorage.setItem('user', true);
      setEmail('');
      setPassword('');
      router.push('/');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error(error, 'error');
    }
  };

  return (
    <div className="max-w-md w-full bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg">
      <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-foreground mb-6">
        Welcome Back
      </h2>

      {/* Gmail Button */}
      <button
        onClick={handleGoogleSignIn}
        className="w-full py-3 mb-6 bg-[#23856D] text-white font-medium rounded-md hover:bg-[#1d704b] flex items-center justify-center space-x-2">
        <GoogleIcon />
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
        {error && <p className="text-red-500 text-center">{error}</p>}

        <ReusableInput
          label="Email Address *"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          required={true}
          className='dark:border-gray-700  text-gray-700 dark:text-foreground bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#23856D] '
        />
        <ReusableInput
          label="Password *"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required={true}
          className='dark:border-gray-700 dark:text-foreground bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#23856D]'
        />

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
    </div>
  );
};

export default SignIn;
