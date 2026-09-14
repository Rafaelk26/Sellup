import React from "react";
import { Image, Text, View, Platform, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

// Components
import { Wrapper } from "../../components/Wrapper";
import { Input, InputPassword } from "../../components/Inputs/Login";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

// Functions
import { handleLoginWithPassword } from "./functions/handleLoginWithPassword";
import { getProfile } from "./functions/getProfile";

// Context
import { UserContext } from "../../context/User";

export default function SignIn(){

    const { updateUser } = React.useContext(UserContext);
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const navigation = useNavigation<any>();

    // Function to handle login with email and password
    async function callLogin(){
        if(!email || !password){
            Toast.show({
                type: 'error',
                text1: 'Por favor, preencha todos os campos.',
                position: 'top',
                visibilityTime: 3000,
            });
            return;
        }
        try{
            const res =  await handleLoginWithPassword(email, password);
            if(res?.user){
                const userData = res.user;
                const userName = await getProfile(userData.id);
                if(userData.email && userName){
                    updateUser({
                        id: userData.id,
                        email: userData.email,
                        name: userName.name
                    });
                }
            }
        }
        catch(error){
            console.log('Error during login:', error);
        }
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
                    <Text className="font-manrope font-regular text-textSecondary text-xl w-64 text-center">
                        Faça login para acessar sua conta agora
                    </Text>
                    
                    <View className="w-10/12 h-auto flex-col items-center gap-4 mt-8"> 
                        <Input value={email} onChangeText={setEmail} />
                        <InputPassword value={password} onChangeText={setPassword} />
                        <Button textButton="Acessar conta" onPress={callLogin} />
                        <Text 
                        onPress={()=> navigation.navigate("SignUp")}
                        className="font-manrope font-regular text-white">
                            Não possui conta? <Text className="font-bold"> Cadastre-se</Text>
                        </Text>
                    </View>
                </View>
                <Footer />
            </KeyboardAvoidingView>
        </Wrapper>
    )
}