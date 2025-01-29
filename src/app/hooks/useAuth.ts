import { getAuth, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from '../store/Slices/authSlice';

const auth = getAuth();

export const useAuth = () => {
  const dispatch = useDispatch();

  const handleSignIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      dispatch(signIn({ uid: user.uid, email: user.email }));
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error signing in:', error.message);
      } else {
        console.error('Unknown error during sign in');
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut(auth);
      dispatch(signOut());
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error signing out:', error.message);
      } else {
        console.error('Unknown error during sign out');
      }
    }
  };

  return { handleSignIn, handleSignOut };
};
