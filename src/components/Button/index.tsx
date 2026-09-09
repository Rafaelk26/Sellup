import { Text, TouchableOpacity } from 'react-native';

// Interface

interface ButtonProps {
    onPress?: () => void;
    textButton: string;
}

export function Button({ onPress, textButton }: ButtonProps) {
 return (
    <TouchableOpacity 
    onPress={onPress}
    className="bg-primary w-full rounded-lg flex items-center justify-center mt-4 p-4">
        <Text className="text-black font-urbanist font-semibold text-2xl">{textButton}</Text>
    </TouchableOpacity>
  );
}