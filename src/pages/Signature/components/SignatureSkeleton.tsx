import { View } from "react-native";
import SkeletonLoading from "expo-skeleton-loading";

export function SignatureSkeleton() {
  return (
    <SkeletonLoading background="#1A1A1A" highlight="#2A2A2A">
      <View className="px-5 pt-6">

        {/* Saudação */}
        <View className="mb-8">
          <View className="h-5 w-40 rounded-md bg-[#1A1A1A]" />
          <View className="mt-3 h-4 w-56 rounded-md bg-[#1A1A1A]" />
        </View>

        {/* Card principal */}
        <View className="h-32 w-full rounded-2xl bg-[#1A1A1A]" />

        {/* Cards secundários */}
        <View className="mt-5 flex-row justify-between">
          <View className="h-28 w-[48%] rounded-2xl bg-[#1A1A1A]" />
          <View className="h-28 w-[48%] rounded-2xl bg-[#1A1A1A]" />
        </View>
      </View>
    </SkeletonLoading>
  );
}