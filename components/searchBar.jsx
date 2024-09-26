import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ onSearch, onDetectLocation }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View className="flex flex-row items-center bg-gray-100 rounded-full p-2">
      <TextInput
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        placeholder="Search per day, city, location"
        className="flex-1 px-4 text-base"
      />
      <TouchableOpacity onPress={() => onSearch(searchText)}>
        <FontAwesome name="search" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDetectLocation} className="ml-4">
        <FontAwesome name="map-marker" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
