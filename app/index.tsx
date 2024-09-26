import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Set a timeout to navigate to the onboarding screen after 0.8 seconds
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 800);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar backgroundColor="#161622" style="light" />
      <Image
        source={require("../assets/images/logo.png")} // Replace with correct path to your logo image
        style={{ width: 200, height: 200 }} // Adjust width and height as needed
        resizeMode="contain"
      />
    </View>
  );
}
