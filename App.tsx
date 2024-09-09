import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { MainStackNavigator } from "./App/Route/stackScreens";



export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator></MainStackNavigator>
    </NavigationContainer>
  );


}
