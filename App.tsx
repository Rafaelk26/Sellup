import { Text, View } from 'react-native';

// Components
import { Wrapper } from './src/components/Wrapper';
import { Header } from './src/components/Header';

// Global CSS
import "./global.css"
 
export default function App() {
  return (
    <Wrapper>
      <Header />
      <View className="border-4 border-red-600">
        <Text className='text-xl'>
          Welcome to Nativewind!
        </Text>
      </View>
    </Wrapper>
  );
}
