import { Text, View } from "react-native";

// Types
import { UserContextType } from '../../../context/User'

export function ProfileContent({ user }: UserContextType){
    return(
        <View
        className="w-full">
            <Text className="text-white">PÁGINA DE PERFIL</Text>
            <Text className="text-white">Bem-vindo {user?.name}</Text>
        </View>
    )
}