import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './Style.js';

const createGrid = (length) => {
  let state = {}, counter = 0;
  for (let i = 0; i < length; i++) {
    let temp = [];
    for (let j = 0; j < length; j++) {
      temp.push({ key: counter, state: 0 });
      counter++;
    }
    eval(`state.row${i} = temp`);
  }
  return state;
}

export default function App() {
  let state = createGrid(5);
  console.log(state);
  return (
    <View style={styles.container}>
      {state.row0.map(element => {
        return <View>
          <Button title={`${element.key}`} key={`${element.key}`} />
        </View>
      })}
    </View>
  )
}


// const [el, el_change] = useState("Welcome to this test app!");
// return (
//   <View style={styles.container}>
//     <Text>{el}</Text>
//     <Button title="push me!!!" onPress={() => el_change("PRESS HARDER!")}/>
//   </View>
// );