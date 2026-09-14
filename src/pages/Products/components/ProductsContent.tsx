import { Text, View } from "react-native";

// Types
import { UserContextType } from '../../../context/User'

export function ProductsContent({ user, clearUser }: UserContextType){
    return(
        <View 
        className="w-full">
            <Text className="text-white">PÁGINA DE PRODUTOS</Text>
            <Text className="text-white">Bem-vindo {user?.name}</Text>
        </View>
    )
}