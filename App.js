import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Product from './Pages/Product';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import Menu from './AppBar/Menu'
export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <Menu/>
      <StatusBar style="auto" />
    </SafeAreaView>
    </Provider>
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
