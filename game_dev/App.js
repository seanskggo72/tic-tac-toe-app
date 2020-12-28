import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
