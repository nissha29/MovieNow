import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { router } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import SearchBar from "../components/SearchBar";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"/>
      <ScrollView className="flex-1 px-5" contentContainerStyle={{minHeight: "100%", paddingBottom: 10}} showsVerticalScrollIndicator={false}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
        <View className="flex-1 mt-5">
          <SearchBar 
            onPress={() => router.push('/search')}
            placeHolder='Search through 300+ movies online'
          />
        </View>
      </ScrollView>
    </View>
  );
} 