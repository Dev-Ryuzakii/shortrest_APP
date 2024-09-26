import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import RoomCard from '../../components/roomcard';

const Saved = ({ savedRooms }) => {
  return (
    <ScrollView className="p-4">
      <Text className="text-xl font-bold mb-4">Saved Rooms</Text>
      {savedRooms.length > 0 ? (
        savedRooms.map((room) => (
          <RoomCard
            key={room.id}
            image={room.image}
            title={room.title}
            location={room.location}
            price={room.price}
            rating={room.rating}
          />
        ))
      ) : (
        <Text className="text-gray-500">No saved rooms yet.</Text>
      )}
    </ScrollView>
  );
};

export default Saved;
