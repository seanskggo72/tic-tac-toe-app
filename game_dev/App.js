import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import makeGrid from './Grid';

// Rendering
export default function App() {
  return makeGrid(5);
}
