import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Abacaxi from "./src/components/OlaMundo";
import Calcula from "./src/components/Calcula/index"
import Saudacao from './src/components/Saudacao/index';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Abacaxi/>*/}

    <View style={styles.header}>
     <Saudacao nome="Lucas"/>
    </View>
 
    <View styles={styles.body}>
      <Calcula 
        somaA={50} 
        somaB={22} 
    
        subA={20}
        subB={5}
    />
    </View>

    <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'right'
  },

  header:{
    backgroundColor: '#dadada',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  body:{
    backgroundColor: 'white',
    marginLeft: 10
  }
});
