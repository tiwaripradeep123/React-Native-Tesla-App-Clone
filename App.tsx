import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Cars from './components/Cars';
import  styles from './styles';
import Header from './components/Header';


const App = () => {
  
  return (
    <View style={styles.container} >
      <Header />
      <Cars />
      
    </View>
  );
}

export default App;