// Code to create a theme switcher using React Context API
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { myColours } from './src/styles/colours';
import Mykeyboard from './src/Components/Mykeyboard';

export default function App() {

  return (
      <SafeAreaView style={styles.container}>
        <Text style={{color: myColours.dark, fontSize: 20, fontWeight: 'bold'}}>Simple Calculator</Text>
        <Mykeyboard />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: myColours.light
  },
});