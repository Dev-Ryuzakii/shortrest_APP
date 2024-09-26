import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RoomCard from '../../components/roomcard';
import SearchBar from '../../components/searchBar';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [rooms, setRooms] = useState([/* Example room data */]);
  
  const handleSearch = (searchText) => {
    // Add filtering logic here to search rooms by different criteria
  };

  const handleLocationDetection = () => {
    // Use Geolocation API or similar to detect location
  };

  const handleFavorite = (roomId) => {
    // Add functionality to save the room as a favorite and show in the Save page
  };

  // Button toggle logic
  const [selectedOption, setSelectedOption] = useState('hour');

  return (
    <ScrollView className="py-10 px-5">
      {/* Location and Search Section */}
      <View className="flex flex-row justify-between items-center">
        <Text className="text-lg">Find your place in</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <FontAwesome name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text className="text-xl font-bold mb-4">Lagos, Nigeria</Text>
      <SearchBar onSearch={handleSearch} onDetectLocation={handleLocationDetection} />

      {/* What do you need? Section */}
      <View className="mt-6">
        <Text className="text-lg font-bold mb-2">What do you need?</Text>
        <View className="flex flex-row justify-between">
          <TouchableOpacity
            className={`flex-1 h-12 mr-2 justify-center items-center rounded-full ${selectedOption === 'hour' ? 'bg-gradient-to-r from-[#9B80D3] to-[#EF1C1C]' : 'bg-gray-200'}`}
            onPress={() => setSelectedOption('hour')}
          >
            <Text className={`text-sm font-bold ${selectedOption === 'hour' ? 'text-white' : 'text-gray-500'}`}>
              Short rest/hr
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 h-12 justify-center items-center rounded-full ${selectedOption === 'day' ? 'bg-gradient-to-r from-[#9B80D3] to-[#EF1C1C]' : 'bg-gray-200'}`}
            onPress={() => setSelectedOption('day')}
          >
            <Text className={`text-sm font-bold ${selectedOption === 'day' ? 'text-white' : 'text-gray-500'}`}>
              Short rest/day
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Near your location */}
      <View className="mt-6 flex flex-row justify-between">
        <Text className="text-lg font-bold">Near your location</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SeeAllRooms')}>
          <Text className="text-sm text-blue-500">See all</Text>
        </TouchableOpacity>
      </View>

      {rooms.map((room) => (
        <RoomCard
          key={room.id} // Make sure to add a unique key for mapping
          image={require('../../assets/images/slide1.png')} // Example image path
          title="Luxury Apartment"
          location="Lagos, Nigeria"
          price={5000}
          rating={4.5}
          onPressFavorite={() => handleFavorite(room.id)}
        />
      ))}

      {/* Top rated in Lagos */}
      <View className="mt-6 flex flex-row justify-between">
        <Text className="text-lg font-bold">Top rated in Lagos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SeeAllRooms')}>
          <Text className="text-sm text-blue-500">See all</Text>
        </TouchableOpacity>
      </View>

      {rooms.map((room) => (
        <RoomCard
          key={room.id} // Example key for room mapping
          image={require('../../assets/images/slide1.png')} // Example image path
          title="Luxury Apartment"
          location="Lagos, Nigeria"
          price={5000}
          rating={4.5}
          onPressFavorite={() => handleFavorite(room.id)}
        />
      ))}

      {/* Travel Tips Section */}
      <View className="mt-6">
        <Text className="text-lg font-bold">Find out your next trip!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SeeAllTrips')}>
          <Text className="text-sm text-blue-500">See all</Text>
        </TouchableOpacity>
        {/* Add travel tips card here */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
