import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../Screens/Splash";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import MenuStacks from "./MenuStacks";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={MenuStacks} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator };