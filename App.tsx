import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

// Routes
import { Routes } from './src/routes/Routes/index';

// Global CSS
import "./global.css"
 
export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <Toast />
    </NavigationContainer>
  );
}
