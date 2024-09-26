import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RoomCard = ({ image, title, location, price, rating, onPressFavorite }) => {
  return (
    <View className="p-3 bg-white shadow-md rounded-xl mb-3">
      {/* Display the room image */}
      <Image source={image} className="w-full h-40 rounded-lg" resizeMode="cover" />
      
      {/* Room Details */}
      <View className="flex flex-row justify-between items-center mt-2">
        <Text className="font-bold text-lg">{title}</Text>
        <FontAwesome name="heart-o" size={24} color="black" onPress={onPressFavorite} />
      </View>
      <Text className="text-gray-600">{location}</Text>
      <View className="flex flex-row justify-between items-center mt-1">
        <Text className="font-semibold text-base">₦{price} / hr</Text>
        <View className="flex flex-row items-center">
          <FontAwesome name="star" size={16} color="gold" />
          <Text className="ml-1">{rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default RoomCard;
