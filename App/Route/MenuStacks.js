import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home";
import Dashboard from "../Screens/Tabs/Dashboard";
import ContactForm from "../Screens/Tabs/ContactForm";
import Profile from "../Screens/Tabs/Profile";
import Userlist from "../Screens/Tabs/Userlist";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const MenuStacks = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Home" component={Home} 
             options={{
                title: 'Home',
                tabBarIcon: ({size,focused,color}) => {
                  return (
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={require("../Images/home.png")}
                    />
                  );
                },
              }}/>
            <Tab.Screen name="Dashboard" component={Dashboard}  options={{
                title: 'Dashboard',
                tabBarIcon: ({size,focused,color}) => {
                  return (
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={require("../Images/dash.png")}
                    />
                  );
                },
              }}/>
            <Tab.Screen name="Contact Form" component={ContactForm} options={{
                title: 'Contact Form',
                tabBarIcon: ({size,focused,color}) => {
                  return (
                    <Image
                      style={{ width: 22, height: 22}}
                      source={require("../Images/contact.png")}
                    />
                  );
                },
              }} />
            <Tab.Screen name="Profile" component={Profile}  options={{
                title: 'Profile',
                tabBarIcon: ({size,focused,color}) => {
                  return (
                    <Image
                      style={{ width: 22, height: 22}}
                      source={require("../Images/profile.png")}
                    />
                  );
                },
              }}/>
            <Tab.Screen name="Userlist" component={Userlist} options={{
                title: 'User List',
                tabBarIcon: ({size,focused,color}) => {
                  return (
                    <Image
                      style={{ width: 22, height: 22}}
                      source={require("../Images/userss.png")}
                    />
                  );
                },
              }}/>


        </Tab.Navigator>
    );
}

export default MenuStacks;