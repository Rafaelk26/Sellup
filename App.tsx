import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { 
  useFonts, 
  Manrope_400Regular, 
  Manrope_500Medium 
} from '@expo-google-fonts/manrope';

import { 
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
} from '@expo-google-fonts/urbanist';

// Routes
import { Routes } from './src/routes/Routes/index';

// Theme
import { theme } from './src/theme';

// Global CSS
import "./global.css"
 
export default function App() {

  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={'light-content'} />
      <Routes />
      <Toast />
    </NavigationContainer>
  );
}
