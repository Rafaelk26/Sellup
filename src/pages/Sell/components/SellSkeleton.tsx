import { View } from "react-native";
import SkeletonLoading from "expo-skeleton-loading";

export function SellSkeleton(){
    return( 
        <SkeletonLoading background="#1A1A1A" highlight="#2A2A2A">
            <View>
                <View className="w-full h-24 bg-[#1A1A1A]" />    
            </View>
        </SkeletonLoading>
    )
}