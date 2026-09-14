import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { UserContextType } from "../../../context/User";

// Components

export function ClientsContent({ user, clearUser }: UserContextType){

    return(
        <View>
            <Text className="text-white">PÁGINA DE CLIENTES</Text>
            <Text className="text-white">Seja bem vindo, {user?.name} </Text>
            <TouchableOpacity 
             onPress={clearUser}
             className="w-56 p-2 bg-red-600 mt-10">
                <Text className="text-white">DESLOGAR NA CONTA</Text>
            </TouchableOpacity>
        </View>
    );
}