'use client';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '@/app/firebase';
import { useRouter } from 'next/navigation';
import { signUpSuccess, signUpFailure } from '../store/Slices/authSlice';
import ReusableInput from '@/common/UI/ReusableInput';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !name) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }
    try {
      const createUser = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(createUser.user, { displayName: name });

      // Dispatch success action
      dispatch(
        signUpSuccess({
          email: createUser.user.email!,
        })
      );

      console.log('User created:', createUser.user);
      router.push('/');
    } catch (error: any) {
      const errorMsg = error.message || 'An error occurred';
      setErrorMessage(errorMsg);

      // Dispatch failure action
      dispatch(signUpFailure(errorMsg));
    }

  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg border-gray-300 border">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Sign Up for Free
      </h2>
      <p className="mt-2 text-center text-gray-600">
        Try everything free for 30 days, no payment details required
      </p>

{/* TODO:bu error message ni uchirib tashlash toastify quyish */}
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}

      <form onSubmit={handleSignUp}>
        <ReusableInput
          label="Name *"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name *"
          required={true}
          className='focus:ring-[#23856D]'
        />
        <ReusableInput
          label="Email Address *"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          required={true}
        />

        <ReusableInput
          label="Password *"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required={true}
        />

        <button
          type="submit"
          className="w-full py-2 font-semibold text-white rounded-md bg-[#2CBE70] hover:bg-opacity-70 transition duration-200"
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default SignUp;
