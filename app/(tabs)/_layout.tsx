import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ focused, icon, text }: any) => {
  if(focused){
    return <ImageBackground source={images.highlight} className={`flex flex-row w-full flex-2 min-w-[112px] min-h-14 justify-center items-center mt-4 overflow-hidden rounded-full gap-1.5 ${text === "Home" ? 'pl-4' : text == "Profile" ? 'pr-4': 'pl-0 pr-0'}`}>
      <Image source={icon} className="size-5" tintColor="#151312"/>
      <Text className="text-base font-semibold">{text}</Text>
    </ImageBackground>
  }else{
    return <View className="size-full flex justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5"/>
    </View>
  }
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 55,
          height: 48,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: '#0f0D23'
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            <TabIcon 
              focused={focused} 
              icon={icons.home} 
              text="Home" 
            />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            <TabIcon 
              focused={focused} 
              icon={icons.search} 
              text="Search" 
            />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            <TabIcon 
              focused={focused} 
              icon={icons.save} 
              text="Saved" 
            />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            <TabIcon 
              focused={focused} 
              icon={icons.person} 
              text="Profile" 
            />,
        }}
      />
    </Tabs>
  );
}
