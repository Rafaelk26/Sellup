import { Text, View } from 'react-native';

export function Footer() {

 const date = new Date();

 return (
   <View className='w-full top-20 h-16 flex justify-center items-center'>
        <Text className='text-textSecondary'>Sellup © {date.getFullYear()} | Todos os direitos reservados</Text>
   </View>
  );
}