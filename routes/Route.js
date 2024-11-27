import { View, Text,ImageBackground,Image } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ticket from '../Screens/Ticket';
import CustomDrawerContent from './CustomDrawerContent';
import NewMember from '../Screens/NewMember';
import Setting from '../Screens/Setting';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Givenpoints from '../Screens/Points/Givenpoints';
import Pendingpoints from '../Screens/Points/Pendingpoints';
import CustomTabbar from './CustomTabbar';
import Raylogo from '../assets/Raylogo.png';
import Bank from '../Screens/BankandExpense/Bank';
import Expenses from '../Screens/BankandExpense/Expenses';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Pendings from '../Screens/Setting/Pendings';
import { ThemeContext } from '../Context/ThemeContext';


const Drawer = createDrawerNavigator();
const Stack=createStackNavigator();
const Tab = createMaterialTopTabNavigator();




export default function Route() {
  return (
   <Stack.Navigator>
    <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
    <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
    <Stack.Screen name='MyDrawer' component={Mydrawer} options={{headerShown:false}}/>
    <Stack.Screen name='Pending' component={Pendings} />
   </Stack.Navigator>
  )
}


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Givenpoints"
      tabBar={props => <CustomTabbar {...props} />}
      screenOptions={{
       tabBarIndicatorStyle: { backgroundColor:'Transparent' }, 
      }}
      
    >
      <Tab.Screen name="Givenpoints" component={Givenpoints} options={{title:"Given Points",headerTitleAlign:"center"}}  />
      <Tab.Screen name="Pendingpoints" component={Pendingpoints} options={{title:"Pending Points",headerTitleAlign:"center"}}  />
    </Tab.Navigator>
  );
}

function MyTab1() {
  return (
    <Tab.Navigator
    initialRouteName="Bank"
    tabBar={props => <CustomTabbar {...props} />}
    screenOptions={{
     tabBarIndicatorStyle: { backgroundColor:'Transparent' }, 
    }}
    
  >
    <Tab.Screen name="Bank" component={Bank} options={{title:"Bank",headerTitleAlign:"center"}}  />
    <Tab.Screen name="Expenses" component={Expenses} options={{title:"Expenses",headerTitleAlign:"center"}}  />
  </Tab.Navigator>
  );
}


function Mydrawer(){
   const { theme } = useContext(ThemeContext);
  return(
    
    <Drawer.Navigator   drawerContent={props => <CustomDrawerContent {...props} />}  screenOptions={{
          drawerStyle: { width: "70%" },
          headerStyle: { backgroundColor: theme.background },
          headerTitleAlign: "center",
          headerRight: () => (<Image source={Raylogo} style={{width:45,height:42.5,position:"absolute",right:20 }} />),
          // headerBackground : ()=>(<ImageBackground source={Back} style={{flex:1}} ></ImageBackground>)
          headerTintColor: theme.text
        }} >
      <Drawer.Screen name="Points" component={MyTabs} options={{title:"Points",headerTitleAlign:"center", }}    />
      <Drawer.Screen name="Ticket" component={Ticket} />
      <Drawer.Screen name="Banks" component={MyTab1} options={{title:"Bank & Expenses",headerTitleAlign:"center"}}  />
      <Drawer.Screen name="Newmember" component={NewMember} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  
  )
}