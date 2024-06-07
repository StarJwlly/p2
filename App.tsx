import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native';


export default function App() {

  function onPressFunction(event: GestureResponderEvent): void {
    axios.get("https://api.thecatapi.com/v1/images/search?limit=5").then(v => {})
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressFunction}>
        <Text>I'm pressable!</Text>
      </Pressable>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
