import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './Style.js';

const createGrid = (length) => {
  let state = {}, counter = 0;
  for (let i = 0; i < length; i++) {
    let temp = [];
    for (let j = 0; j < length; j++) {
      temp.push({ id: counter, state: 0 });
      counter++;
    }
    eval(`state.row${i} = temp`);
  }
  return state;
}

export default function App() {
  let state = createGrid(5);
  console.log(state);
  const [el, el_change] = useState("Welcome to this test app!");
  return (
    <View style={styles.container}>
      <Text>{el}</Text>
      <Button title="push me!" onPress={() => el_change("You pressed me!")} />
    </View>
  );
}
