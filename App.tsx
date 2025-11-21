import React, { useEffect, useState } from 'react';
import SignupPage from './components/Signup';
import HomePage from './components/Home';
import auth from '@react-native-firebase/auth';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
export default function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(_user => {
      setUser(_user);
    });

    return unsubscribe;
  }, []);

  if (user) {
    return <HomePage />;
  }

  return <SignupPage />;
}
