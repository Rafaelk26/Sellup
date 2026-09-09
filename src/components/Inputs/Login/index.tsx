import React from "react";
import { View, TextInput, Pressable, Keyboard } from "react-native";
import { Ionicons } from '@expo/vector-icons';

// Interface

interface InputProps {
    value: string;
    onChangeText: (text: string) => void;
}


export function Input({value, onChangeText}: InputProps) {
    return (
        <View className="w-full flex flex-col gap-4">
            <TextInput
             value={value}
             onChangeText={onChangeText}
             placeholder="Email"
             placeholderTextColor="#BEBEBE"
             className="bg-inputBackground font-urbanist text-white text-xl font-medium border border-border rounded-lg px-4 py-4
            focus:border-inputFocus"
            />
        </View>
    )
}


export function InputPassword({value, onChangeText}: InputProps) {
    
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const inputRef = React.useRef<TextInput>(null);

    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible((previous) => !previous);

        setTimeout(() => {
            inputRef.current?.focus();
            Keyboard.isVisible();
        }, 100);
    };
    
    return (
        <View className="w-full flex flex-col gap-4">
            <TextInput
             ref={inputRef}
             value={value}
             onChangeText={onChangeText}
             placeholder="Senha"
             placeholderTextColor="#BEBEBE"
             secureTextEntry={!isPasswordVisible}
             autoCapitalize="none"
             autoCorrect={false}
             className="bg-inputBackground font-urbanist text-white text-xl font-medium border border-border rounded-lg px-4 py-4
            focus:border-inputFocus"
            />
            <Pressable
             onPressIn={handleTogglePasswordVisibility}
             className="absolute right-4 top-4"
             hitSlop={10}
            >
                <Ionicons
                 name={isPasswordVisible ? 'eye-off' : 'eye'}
                 size={24}
                 color="#BEBEBE"
                />
            </Pressable>
            
        </View>
    )
}