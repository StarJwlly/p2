import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

class Img {
  height: number;
  width: number;
  url: string;

  constructor(url: string, width: number, height: number) {
    this.url = url;
    this.width = width;
    this.height = height;
  }
}

export default function App() {

  const [images, setimages] = useState <Img[]>([]);

  function onPressFunction(event: GestureResponderEvent): void {
    axios.get("https://api.thecatapi.com/v1/images/search?limit=5").then(v => {
      setimages(v.data.slice(0, 5).map(x => new Img(x.url, x.width, x.height)));
    })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable 
        onPress={onPressFunction}
        style={styles.button}>
        <Text>press for cats!</Text>
      </Pressable>
      {
        images.map(x => 
          x != undefined ? 
          <Image
            resizeMode='contain'
            style={{ width: x.width, height: x.height, }}
            source={{ uri: x.url }}
          /> : <Image/>
        )
      }
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4,
    marginBottom: 12
  },
});
