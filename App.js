import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Route from '../Rays/routes/Route';
import { ThemeProvider } from "./Context/ThemeContext";


export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Route />
    </NavigationContainer>
    </ThemeProvider>
  );
}


