import Toast from "react-native-toast-message";

// Database
import { supabase } from "../../../services/db";

export async function handleLoginWithPassword(email: string, password: string){
    
    Toast.show({
        type: 'info',
        text1: 'Acessando...',
        position: 'top',
        visibilityTime: 2000,
    });

    try{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if(error){
            Toast.show({
                type: 'error',
                text1: 'Email ou senha incorretos!',
                position: 'top',
                visibilityTime: 2000,
            });

            console.log(error);
            return null;
        }

        Toast.show({
            type: 'success',
            text1: 'Login realizado com sucesso!',
            position: 'top',
            visibilityTime: 2000,
        });

        return data;
    }
    catch(err){

        console.log(err);

        Toast.show({
            type: 'error',
            text1: 'Erro ao realizar login!',
            position: 'top',
            visibilityTime: 2000,
        });
        
        return null;
    }
}