import React from 'react';
import { Button, Text, View } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
};

export default DetailsScreen;
