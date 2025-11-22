import React from 'react';
import FilmePage from './Filmes';
import AboutPage from './About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@react-native-vector-icons/feather';
const Tab = createBottomTabNavigator();
function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#060313',
          borderTopColor: '#00000000',
        },
        tabBarActiveTintColor: '#faff39',
        tabBarInactiveTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Filmes"
        component={FilmePage}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="film" size={size} color={color}></Feather>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Sobre"
        component={AboutPage}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="user" size={size} color={color}></Feather>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default TabsNavigator;
