import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <Text>hello world</Text>
      </View>
    </NavigationContainer>
  );
}