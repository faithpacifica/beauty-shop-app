// import { getAuth, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';
// import { useDispatch } from 'react-redux';
// import { signIn, signOut } from '../store/Slices/authSlice';

// const auth = getAuth();

// export const useAuth = () => {
//   const dispatch = useDispatch();

//   const handleSignIn = async (email: string, password: string) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       dispatch(signIn({ uid: user.uid, email: user.email }));
//     } catch (error) {
//       console.error('Error signing in:', error);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await firebaseSignOut(auth);
//       dispatch(signOut());
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   return { handleSignIn, handleSignOut };
// };
