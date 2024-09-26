import React, { useState } from "react";
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image: require("../../assets/images/slide1.png"), // Ensure correct image paths
    text: "Welcome to our app! Let's get started.",
  },
  {
    id: 2,
    image: require("../../assets/images/slide2.png"),
    text: "Discover new features and functionalities.",
  },
  {
    id: 3,
    image: require("../../assets/images/slide3.png"),
    text: "Stay connected and enjoy seamless experiences.",
  },
];

const OnboardingScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handleScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveSlide(slideIndex);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {slides.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <Image source={slide.image} style={styles.image} />
            <Text style={styles.text}>{slide.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <LinearGradient
            key={index}
            colors={
              activeSlide === index
                ? ["#917AFD", "#EF1C1C"] // Gradient for active dot
                : ["#ddd", "#ddd"] // Solid color for inactive dot
            }
            style={styles.dot}
          />
        ))}
      </View>

      {/* Continue Button */}
      {activeSlide === slides.length - 1 && (
        <TouchableOpacity style={styles.button} onPress={() => router.push("/sign-in")}>
          <LinearGradient
            colors={["#917AFD", "#EF1C1C"]}
            style={styles.buttonBackground}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // Centers the entire content
  },
  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
   
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    marginBottom:20,
    paddingHorizontal: 40,
    color: "#333",
  },
  pagination: {
    position: "absolute",
    bottom: 100,
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom:10,

  },
  button: {
    paddingTop: 20,
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },
  buttonBackground: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
