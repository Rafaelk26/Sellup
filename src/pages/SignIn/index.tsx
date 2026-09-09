import React from "react";
import { Image, Text, View, Platform, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

// Components
import { Wrapper } from "../../components/Wrapper";
import { Input, InputPassword } from "../../components/Inputs/Login";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

// Functions
import { handleLogin } from "../../functions/handleLogin";


export default function SignIn(){

    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    async function callLogin(){
        await handleLogin(email, password);
    }

    return(
        <Wrapper>
            <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled
            className="w-full h-full flex justify-center">
                <View className="w-full flex flex-col items-center gap-4">
                    <Image 
                     source={require("../../../assets/SellUp.png")} 
                     width={1080}
                     height={1080}
                     className="w-[150px] h-[150px]"
                    />
                    <Text className="font-urbanist font-bold text-white text-5xl mt-8">Entrar</Text>
                    <Text className="font-manrope font-regular text-textSecondary text-xl w-64 text-center">Faça login para acessar sua conta agora</Text>
                    
                    <View className="w-10/12 h-auto flex-col items-center gap-4 mt-8"> 
                        <Input value={email} onChangeText={setEmail} />
                        <InputPassword value={password} onChangeText={setPassword} />
                        <Button textButton="Acessar conta" onPress={() => callLogin()} />

                        <View className="w-full flex flex-row items-center justify-between gap-4 mt-4">
                            <View className="w-44 border border-white" />
                            <Text className="font-manrope font-regular text-white">ou</Text>
                            <View className="w-44 border border-white" />
                        </View>

                        <TouchableOpacity 
                        className="w-12 h-12 bg-primary/40 border border-white mt-4 p-2 flex justify-center items-center rounded-full">
                            <FontAwesome name="google" size={26} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer />
            </KeyboardAvoidingView>
        </Wrapper>
    )
}