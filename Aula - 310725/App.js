import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sauda from './src/components/Saudacao';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red', fontWeight: 'bold', fontSize:26}} >Olá Mundo!</Text>
      <Text style={styles.textSecundario}>Primeiro texto inserido no aplicativo.</Text>

      <Sauda/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textSecundario: {
    color:'#000',
    fontSize:22,

  },
});
