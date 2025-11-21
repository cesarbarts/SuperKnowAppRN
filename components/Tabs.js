import React from 'react';
import FilmePage from './Filme';
import AboutPage from './About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
function TabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Filmes" component={FilmePage}></Tab.Screen>
      <Tab.Screen name="Sobre" component={AboutPage}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default TabsNavigator;
