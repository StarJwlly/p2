import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text, View, Image } from 'react-native';

class Img {
  height: number;
  width: number;
  url: string;

  constructor(url, width, height) {
    this.url = url;
    this.width = width;
    this.height = height;
  }
}

export default function App() {

  const [images, setimages] = useState <Img[]>([]);

  function onPressFunction(event: GestureResponderEvent): void {
    axios.get("https://api.thecatapi.com/v1/images/search?limit=5").then(v => {
      let t = []
      for (let i = 0; i < 5; i++) {
        t.push(new Img (v.data[i].url, v.data[i].width, v.data[i].height));
      }
      console.log(v)
      setimages(t);
    })
  }

  return (
    <View style={styles.container}>
      <Pressable 
        onPress={onPressFunction}
        style={styles.button}>
        <Text>I'm pressable!</Text>
      </Pressable>
      <Image
        style={{
          width: images[0] == undefined ? 0 : images[0].width,
          height: images[0] == undefined ? 0 : images[0].height,
        }}
        source={{
          uri: images[0] == undefined ? '' : images[0].url,
        }}
      />
      <StatusBar style="auto" />
    </View>
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
