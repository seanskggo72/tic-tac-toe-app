import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './Style.js';

export default function App() {
  const [el, el_change] = useState("Welcome to this test app!");
  return (
    <View style={styles.container}>
      <Text>{el}</Text>
      <Button title="push me!" onPress={() => el_change("You pressed me!")}/>
      <StatusBar style="auto" />
    </View>
  );
}
