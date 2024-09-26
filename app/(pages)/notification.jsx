import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Notification = () => {
  return (
    <ScrollView className="p-4">
      <Text className="text-xl font-bold mb-4">Notifications</Text>
      {/* Render a list of notifications */}
      <Text>No new notifications.</Text>
    </ScrollView>
  );
};

export default Notification;
