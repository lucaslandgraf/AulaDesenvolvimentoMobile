import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
       <Button title='oiba1'></Button>
       <Button title='oiba2'></Button>
       <Button title='oiba3'></Button>
       </View>

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    flex: 0.5,
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 10,
  }
});
