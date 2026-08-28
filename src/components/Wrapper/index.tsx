import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface WrapperProps{
    children?: ReactNode;
}

export function Wrapper({ children }: WrapperProps){
    return(
        <SafeAreaView>
            { children }
        </SafeAreaView>
    )
}