import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Route from '../Rays/routes/Route';


export default function App() {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
    
  );
}


