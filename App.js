import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Product from './Pages/Product';

import Menu from './AppBar/Menu'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
   // alignItems: 'center',
   // justifyContent: 'center',
  },
});
