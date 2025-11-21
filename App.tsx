import React, { useEffect, useState } from 'react';
import SignupPage from './components/Signup';
import HomePage from './components/Home';
import auth from '@react-native-firebase/auth';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabsNavigator from './components/Tabs';
export default function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(_user => {
      setUser(_user);
    });

    return unsubscribe;
  }, []);

  const Stack = createStackNavigator();
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Tabs" component={TabsNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return <SignupPage />;
}
