import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela com todo espaço disponível
    backgroundColor: '#f2f2f2', // Cor de fundo do container
    flexDirection: 'row', // Eixo Principal
    justifyContent: 'center', // Alinhamento do eixo principal
    alignItems: 'center', // Alinhamento do eixo secundário
  },
  box1:{
    width: 50,
    height: 50,
    backgroundColor: 'red',
    margin: 5,
  },
  box2:{
    width: 50,
    height: 50,
    backgroundColor: 'green',
    margin: 5,
  
  },
  box3:{
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    margin: 5,
  }

});
