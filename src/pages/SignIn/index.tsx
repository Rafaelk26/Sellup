import { Text, View } from "react-native";

// Components
import { Wrapper } from "../../components/Wrapper";

export default function SignIn(){
    return(
        <Wrapper>
            <View>
                <Text className="font-urbanist font-semibold text-white text-5xl">Entrar</Text>
            </View>
        </Wrapper>
    )
}