import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getAuth, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Your Firebase config

const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
    await signInWithCredential(auth, googleCredential);
    console.log('Signed in with Google!', userInfo);
  } catch (error) {
    console.error(error);
  }
};
