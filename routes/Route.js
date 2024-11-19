import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Screens/Dashboard';
import Profile from '../Screens/Profile';
import CustomDrawerContent from './CustomDrawerContent';


const Drawer = createDrawerNavigator();
const Stack=createStackNavigator();


export default function Route() {
  return (
   <Stack.Navigator>
    <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
    <Stack.Screen name='Register' component={Register} options={{headerShown:false}} />
    <Stack.Screen name='MyDrawer' component={Mydrawer} options={{headerShown:false}}  />
   </Stack.Navigator>
  )
}



function Mydrawer(){
  return(
    <Drawer.Navigator   drawerContent={props => <CustomDrawerContent {...props} />} screenOptions={{drawerStyle:{width:"60%"}}} >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  )
}