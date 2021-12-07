import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Product from './Pages/Product';
import Client from './Pages/Client';
import Delivery from './Pages/Delivery';
import Payement from './Pages/Payement';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Payement/>
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
