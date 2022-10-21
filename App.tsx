import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

// https://flexbox.buildwithreact.com

export default function App() {
  return (
    <View>
      <SafeAreaView style={{backgroundColor: 'red'}}></SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <Text>siema</Text>
      </View>
    </View>
  );
}
